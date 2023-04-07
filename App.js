import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
       
  <div class="scroll-button">
    <a href="#home"><i class="fas fa-arrow-up"></i></a>
  </div>  
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a href="#" class="logo">Porto <span>Folio</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
            <i class="navbar-toggler-icon bi-menu-down"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0s menu-navbar-nav">
        <li class="nav-item">
          <a class="nav-link px-lg-4 rounded active" aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-lg-4 rounded" href="#about">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-lg-4 rounded" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-lg-4 rounded" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-lg-4 rounded" href="#contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-lg-4 rounded" href="https://github.com/YK2852/Portfolio-Website-.git" target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div className="home" id="home">
  <div class="container">
    <div class="row">
      <div class="col-lg-7 order-lg-1 order-2 banner-content">
        <h3>Hello, I'm</h3>
        <h1 class="display-1">Yuva Krishnan</h1>
        <h4>Frontend Developer</h4>
      </div><br/><br/>
      <div class="col-lg-5 order-lg-2 order-1">
        <div class="top-right-img">
        <img src="./images/img.png" class="img-fluid"/>
      </div>
    </div>
  </div>
  </div>    
</div>

<div class="about" id="about">
 <div class="container-fluid">
  <div class="content">
    <div class="title"><span>About Me</span></div>
    <div class="about-details">
      <div class="left">
        <img src="./images/about.jpeg" class="img-fluid"/>
      </div>
      <div class="right">
        <div class="topic">Designing Is My Passion</div>
        <p>I'm a frontend developer with a passion for creating aesthetically pleasing user interfaces and experiences. I have experience in HTML, CSS, JavaScript,. I'm highly organized and detail oriented, and I'm constantly looking for ways to improve my skills. I'm passionate about staying up to date with the latest web technologies, and I'm always eager to learn new techniques to further improve my work.</p>
      </div>
    </div>
  </div>
</div>
</div>

<section class="skills" id="skills">
      <div class="content">
        <div class="title"><span>My Skills</span></div>
        <div>
            <div class="skills-container">
              <div class="skills-img">
                <img src="./images/skills.png" alt=""/>
            </div>
                <div class="bars">
                    <div class="bars-box">
                        <h3>HTML</h3>
                        <span>70%</span>
                        <div class="light-bar"></div>
                        <div class="percent-bar html-bar"></div>
                    </div>
                    <div class="bars-box">
                        <h3>CSS</h3>
                        <span>65%</span>
                        <div class="light-bar"></div>
                        <div class="percent-bar css-bar"></div>
                    </div>
                    <div class="bars-box">
                        <h3>JAVASCRIPT</h3>
                        <span>40%</span>
                        <div class="light-bar"></div>
                        <div class="percent-bar js-bar"></div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
    </section>


    <section class="projects" id="projects"/>
      <div class="contact">
          <div class="title"><span>Projects</span></div>
  </div>
  <div class="project-card">
    <div class="card">
      <img src="./images/ss.PNG" alt=""/>
      <div class="info">
        <h1>Calculater</h1>
        <a href="https://sampalraj.github.io/calculater/" target="blank" class="btn">view Site</a>
      </div>
    </div>

    <div class="card">
      <img src="./images/ss1.PNG" alt=""/>
      <div class="info">
        <h1>Homepage </h1>
        <a href="https://sampalraj.github.io/News-homepage/" target="blank" class="btn">view Site</a>
      </div>
    </div>

    <div class="card">
      <img src="./images/ss2.PNG" alt=""/>
      <div class="info">
        <h1>Portofolio</h1>
        <a href="https://sampalraj.github.io/portofilio-testpage/" target="blank" class="btn">view Site</a>
      </div>
    </div>
    <div class="card">
      <img src="./images/ss3.PNG" alt=""/>
      <div class="info">
        <h1>Card details </h1>
        <a href="https://sampalraj.github.io/Interactive-card-details/" target="blank" class="btn">view Site</a>
      </div>
    </div>

    <div class="card">
      <img src="./images/ss4.png" alt=""/>
      <div class="info">
        <h1>Product card</h1>
        <a href="https://sampalraj.github.io/Product-preview-card-component/" target="blank" class="btn">view Site</a>
      </div>
    </div>

    <div class="card">
      <img src="./images/png.gif" alt=""/>
      <div class="info">
        <h1>view more site</h1>
        <a href="https://github.com/YK2852/Portfolio-Website-.git" target="blank" class="btn">view Site</a>
      </div>
    </div>
  </div>

  <div class="contact" id="contact">
  <div class="contact- container">
    <div class="row">
      <div class="col-md-6">
        <div class="title"><span>Contact Us</span></div>
        <div class="text">
          <div className="topic">Have Any Projects?</div>
          
          <a href="https://formsubmit.co/el/rubuse" class="btn btn-primary">Send message</a>
        </div>        
      </div>
      <div class="col-md-6">
        <h2>Contact Information</h2>
        <p>Chennai, Tamilnadu 600 116</p>
        <p>Phone: +91 7305859619</p>
        <p>Email: yuvakrishnan2852@gmail.com</p>
      </div>
    </div>
  </div>
</div>

<div class="copyright">
  &#169; Portofolio | All  Right Resserved
</div>






<script src="script.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
