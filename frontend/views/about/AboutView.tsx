import { HorizontalLayout } from '@hilla/react-components/HorizontalLayout.js'


export default function AboutView() {
  return (
    <div className="flex flex-col h-full items-center justify-center p-l text-center box-border">
      <img style={{ width: '200px' }} src="images/empty-plant.png" />
            <h2>Birdnest Monitor </h2>
            <p>This is a web application to monitor violators in NDZ (Non Drone Zone).</p>
            <h2>author: Itoe Kimura</h2>
            <p>Hello World! I am a student at Hive Helsinki.</p>
            <p>I am currently focusing on algorithms, <span className={'bold'}>Java, C, Python, Linux, and networks</span></p>
            <p>My Learning interests: back-end software development, cloud architecture (AWS, Azure) and data engineering.</p>
            <HorizontalLayout theme="spacing">
                <a href="">
                    <img style={{ height: '30px' }} src="images/github.png"/>
                </a>
                <a href="https://www.linkedin.com/in/itkimura/">
                    <img style={{ height: '30px' }} src="images/linkedin.png"/>
                </a>
            </HorizontalLayout>
    </div>
  );
}
