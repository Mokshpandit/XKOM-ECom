import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src = video.currentSrc || video.src;

    // Ensure video is activated on iOS
    const once = (el, event, fn, opts) => {
      const onceFn = function (e) {
        el.removeEventListener(event, onceFn);
        fn.apply(this, arguments);
      };
      el.addEventListener(event, onceFn, opts);
      return onceFn;
    };

    once(document.documentElement, 'touchstart', () => {
      video.play();
      video.pause();
    });

    const tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    const handleVideoLoaded = () => {
      tl.fromTo(
        video,
        { currentTime: 0 },
        { currentTime: video.duration || 1 }
      );
    };

    video.addEventListener('loadedmetadata', handleVideoLoaded);

    // Optional fetch workaround for iOS video seeking issues
    setTimeout(() => {
      if (window.fetch) {
        fetch(src)
          .then((response) => response.blob())
          .then((response) => {
            const blobURL = URL.createObjectURL(response);
            const t = video.currentTime;

            once(document.documentElement, 'touchstart', () => {
              video.play();
              video.pause();
            });

            video.setAttribute('src', blobURL);
            video.currentTime = t + 0.01;
          });
      }
    }, 1000);

    return () => {
      video.removeEventListener('loadedmetadata', handleVideoLoaded);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} id="container" className="relative h-[200vh]">
      <video
        ref={videoRef}
        className="video-background fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/Ai_PC_Build.mp4"
        muted
        playsInline
      />
      {/* You can add content here */}
      <div className="relative z-10 text-white p-10">
        <h1 className="text-5xl font-bold">Scroll to Play Video</h1>
        <p className="mt-4">This video scrolls as you scroll down the page.</p>
      </div>
    </section>
  );
};

export default Home;
