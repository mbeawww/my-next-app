import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
import ImageProfile from "@/components/imageProfile";

export default function PropsPage() {
  return (
    <div>
      <MenuBar page={"Props"} />
      <div className="bg-violet-500 p-4">
        <h1 className="text-6xl text-center ibm-plex-sans-thai-bold">Props</h1>
        <h1 className="text-center text-3xl p-4 font-extrabold">
          Components รูป
        </h1>
        <ImageProfile src="https://static01.nyt.com/images/2025/01/23/multimedia/00dispatch-moodeng-06-pjcl/00dispatch-moodeng-06-pjcl-mediumSquareAt3X.jpg" />
        <ImageProfile src="https://eco-business.imgix.net/ebmedia/fileuploads/1moodeng_.jpg?fit=crop&h=960&ixlib=django-1.2.0&w=1440" />
        <p className="text-center text-3xl p-4 ibm-plex-sans-thai-extralight">
          Props เป็นเหมือน function ที่มีการรับ input จากภายในเพื่อคุม system
          ภายใน
        </p>
      </div>
      <Footer />
    </div>
  );
}
