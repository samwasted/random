import Image from "next/image";
import Silk from "@/components/ui/Silk";
import AnimatedContent from "@/components/ui/AnimatedContent";
import FadeContent from "@/components/ui/FadeContent";
export default function Home() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="h-auto w-fit flex justify-center items-center">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <div className="text-white flex justify-center items-center text-center m-20">Content to Animate</div>
        </AnimatedContent>
      </div>

      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} >
        <div className="text-white">cool</div>
      </FadeContent>
    </div>


  );
}
