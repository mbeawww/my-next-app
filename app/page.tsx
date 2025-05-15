import MenuBar from "@/components/MenuBar"

export default function IndexPage() {
  return (
  <div>
    <MenuBar page="Home"/>  
    <div>
      <div className="alert alert-warning" role="alert">
        <h1 className="ibm-plex-sans-thai-bold fonts">หมูเด้ง</h1>
      </div>
      {/*section 1*/}
      <div className="section1-box">
        <h1 className="section1-name ibm-plex-sans-thai-bold">Hey I'm Kankawee</h1>
        <p className="section1-meta-data ibm-plex-sans-thai-extralight">
          I'm a student at Rajamangala University of Technology Krungthep
        </p>
        <img className="section1-profile-img" src="https://www.prachachat.net/wp-content/uploads/2024/09/hippo-1.jpg" alt="Profile-img" />
        <p className="section1-caption ibm-plex-sans-thai-extralight">
          Caption : หมูเด้ง
        </p>
      </div>
    </div>
  
    <div className="section3-box">
      <div className="section3-box-a">
        <h1>Resume</h1>
        <p><strong>Name</strong>Kankawee</p>
        <p>
          <strong>Education</strong> Rajamangala University of Technology
          Krungthep
        </p>
        <p><strong>ประสบการณ์</strong> ฝึกงานด้านพัฒนาเว็บไซต์</p>
      </div>
      <div className="section3-box-b">
        <h1>Skills</h1>
        <p><strong>ภาษา</strong> ไทย อังกฤษ</p>
        <p><strong>ทักษะ</strong> HTML CSS JavaScript</p>
        <p><strong>Additional Skills</strong> Node.js, React</p>
        <p><strong>Interests</strong> Web Development, AI, Music</p>
      </div>
    </div>
    <h2 className="text-center text-2xl">จัดทำโดยนาย Kankawee Lamoon</h2>
    <p className="text-center text-2xl">รหัสนักศึกษา 67605050011-2</p>
    </div>
    
  )
}

