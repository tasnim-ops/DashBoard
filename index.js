class DashComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `


        <!--Bootstrap icones-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
        <!--Font awesome icones-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />


        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script> 
               <style>
                .card {
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 16px;
                    text-align: center;
                    font-family: Arial, sans-serif;
                }
                .card h2 {
                    margin: 0;
                }
                .card p {
                    margin: 8px 0;
                    color: #555;
                }
            </style>
            
            <div id="navbar-container"></div>
            <div id="content-container"></div>
            
                
            
        `
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    static get observedAttributes() {
        return ['name', 'age', 'bio'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    connectedCallback() {
        this.navBra();
        this.render();
        this.navContent();
    }
    navBra() {
        const navHtml = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid">
            <div class="row w-100">
                <div class="col-4 d-flex ">	<h3>&#128512;</h3></div>
                <div class="col-4 "> 
                    <form class="d-flex justify-content-center" role="search">
                        <input class="form-control bg-dark" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div class="col-4 ">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item me-3"  style="margin-left:80px;">
                    <a class="nav-link active " aria-current="page" "href="#">Active</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <img class="ms-3" style="width:40px; height:40px; border-radius:50%;" src="https://res.cloudinary.com/ddbiyenrd/image/upload/v1676939469/tasnim/work/faces/istockphoto-518090422-612x612_ygiwfr.jpg">
                  <li class="nav-item dropdown ms-3">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      User
                    </a>
                    <ul class="dropdown-menu ">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>

                </ul>

              </div>
                </div>
            </div>
        </div>
      </nav>`
        const navbarContainer = this.shadowRoot.getElementById('navbar-container');
        navbarContainer.innerHTML = navHtml;
    }

    navContent() {
        
        const iconCount = 14;
        let minimizeIconsHtml = '';
        for (let i = 0; i < iconCount; i++) {
            minimizeIconsHtml += '<i class="fa-solid fa-window-minimize" style="color:blue;"></i>';
        }

        

        const navHtml = `
        <style>
        .sideBareIcones{
            margin-right:30px;
            font-size:24px;
        }
        .sideicone{margin-top:30px;
            font-size:24px;
            color:white;
        }
        .mygrids {
            margin-top:10px;
            border-radius: 10px;
        }
        .shadow-red {
            box-shadow: 0px 5px 0px red;
            //background-color:red;
            //background: linear-gradient(45deg, red, yellow, green, blue);
            background: linear-gradient(to bottom, #f9cccc, #ffe5e5);        }
        .shadow-blue {
            box-shadow: 0px 5px 0px #1c4fff;
            //background-color:#b3c4ff;
            //background: radial-gradient(circle, red, yellow);
            background: linear-gradient(to bottom, #717bff, white);
        }
        .shadow-green {
            box-shadow: 0px 5px 0px #64e293;
            ;
            //background-color:#b7d5cb;
            background: linear-gradient(to bottom, #64e293, white);
        }
        .shadow-yellow {
            box-shadow: 0px 5px 0px #e59a6d;
            //background-color:#f1e6cf;
            background: linear-gradient(to bottom, #E5C100, #f9f2cc);
        }
        .shadow-pink {
            box-shadow: 0px 5px 0px pink;
            //background-color:red;
            background: linear-gradient(to bottom, #f880b9, white);
        }
        .taskCercle{
            border-radius:50%; width:50px; height:50px;
        }
        </style>
        
            <div class="row bg-dark  w-100" style="margin-left:0.8px; " >
                <div class="col-3" id="sidebar">
                    <div class="sideicone" id="">  <i class="fas fa-tasks sideIcones sideBareIcones" ></i>Tasks </div>
                    <div class="sideicone" id=""> <i class="bi bi-envelope-fill sideIcones sideBareIcones"></i>Messages</div>
                    <div class="sideicone" id=""><i class="fa fa-area-chart sideIcones sideBareIcones " style="color:blue;"></i>Analytics</div>
                    <div class="" id="">${minimizeIconsHtml}</div>
                    <div class="sideicone" id=""> <i class="fa-solid fa-credit-card sideIcones sideBareIcones"></i>Payments</div>
                </div>
                <div class="col-9" id="content" style="height:700px; overflow: auto;">
                <div class=" w-100 d-flex align-items-center justify-content-start ps-2" style="border-top-left-radius: 10px; height:50px; background-color: rgb(13, 13, 163); color:white; font-size:24px;">Analytics</div>
                <div class=" w-100 bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6 mb-3 ">
                            <div class="p-3 mygrids shadow-red d-flex align-items-center justify-content-center">
                                <div class="col " style="margin-right: 15px;">
                                    <div class="d-flex align-items-center justify-content-center taskCercle"  style=" background-color:red;">
                                        <i class="fa-solid fa-credit-card sideIcones "style="color:white;"></i>
                                    </div>
                                </div>
                                <div class="col">
                                    <div>TOTAL REVENUE</div>
                                    <div style="font-size:30px"> $3249 <i class="bi bi-caret-up-fill" style="color:red;"></i></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 ">
                        <div class="p-3 mygrids shadow-blue d-flex align-items-center justify-content-center">
                        <div class="col " style="margin-right: 15px;">
                            <div class=" d-flex align-items-center justify-content-center taskCercle"  style=" background-color:blue;">
                            <i class="bi bi-people-fill" style="color:white;"></i>
                            </div>
                        </div>
                        <div class="col">
                            <div>TOTAL USERS</div>
                            <div style="font-size:30px"> 249  <i class="bi bi-arrow-left-right" style="color:blue;"></i></div>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6 mb-3 ">
                        <div class="p-3 mygrids shadow-yellow d-flex align-items-center justify-content-center">
                        <div class="col " style="margin-right: 15px;">
                            <div class="d-flex align-items-center justify-content-center taskCercle"  style=" background-color:#e59a6d;">
                            <div style="font-size:30px"> <i class="bi bi-person-plus-fill" style="color:white;"></i></div>
                            </div>
                        </div>
                        <div class="col">
                            <div>NEW USERS</div>
                            <div style="font-size:30px"> 2 <i class="bi bi-caret-up-fill" style="color:#e59a6d;"></i></div>
                        </div>
                    </div>
                        </div>
                        <div class="col-12 col-md-6 ">
                        <div class="p-3 mygrids shadow-pink d-flex align-items-center justify-content-center">
                        <div class="col" style="margin-right: 15px;">
                            <div class="d-flex align-items-center justify-content-center taskCercle"  style=" background-color:#f880b9;">
                            <i class="bi bi-menu-button-wide-fill" style="color:white;"></i>
                            </div>
                        </div>
                        <div class="col">
                            <div>SERVER UPTIME</div>
                            <div style="font-size:30px"> 152 days</div>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6 mb-3">
                        <div class="p-3 mygrids shadow-red d-flex align-items-center justify-content-center">
                        <div class="col " style="margin-right: 15px;">
                            <div class=" d-flex align-items-center justify-content-center taskCercle"  style=" background-color:red;">
                            <i class="fa-solid fa-list-check" style="color:white;"></i>
                            </div>
                        </div>
                        <div class="col">
                            <div>TO DO LIST</div>
                            <div style="font-size:30px"> 7 tasks</div>
                        </div>
                    </div>
                        </div>
                        <div class="col-12 col-md-6">
                        <div class="p-3 mygrids shadow-green d-flex align-items-center justify-content-center">
                        <div class="col " style="margin-right: 15px;">
                            <div class=" d-flex align-items-center justify-content-center taskCercle"  style="background-color:#64e293;">
                            <i class="fa-solid fa-inbox" style="color:white;"></i>
                            </div>
                        </div>
                        <div class="col">
                            <div>ISSUES </div>
                            <div style="font-size:30px"> 3 <i class="bi bi-caret-up-fill" style="color:#64e293;"></i></div>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>






                <!--charts!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6 mb-3 card">
                            <div class="border card-header d-flex justify-content-start">GRAPH</div>
                            <div class="border card-body">
                                <canvas id="myChart" style="width:100%;max-width:700px"></canvas>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 card ">
                            <div class="border card-header d-flex justify-content-start">GRAPH</div>
                            <div class="border card-body"><canvas id="myChart2" style="width:100%;max-width:600px"></canvas></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 mb-3 card">
                            <div class="border card-header d-flex justify-content-start">GRAPH</div>
                            <div class="border card-body">
                                <canvas id="myChart3" style="width:100%;max-width:600px"></canvas>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 card ">
                            <div class="border card-header d-flex justify-content-start">GRAPH</div>
                            <div class="border card-body"><canvas id="myChart4" style="width:100%;max-width:600px"></canvas></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 mb-3 card">
                            <div class="border card-header d-flex justify-content-start">GRAPH</div>
                            <div class="border card-body">
                                <canvas id="myChart5" style="width:100%;max-width:700px"></canvas>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 card ">
                            <div class="border card-header d-flex justify-content-start">GRAPH</div>
                            <div class="border card-body"><canvas id="myChart6" style="width:100%;max-width:600px"></canvas></div>
                        </div>
                    </div>
                </div>
              </div>
                
              
                </div>
            </div>
        `
        const navcontContainer = this.shadowRoot.getElementById('content-container');
        navcontContainer.innerHTML = navHtml;
        const myChart= this.shadowRoot.getElementById('myChart')
        this.chartOne(myChart)
        const myChart2= this.shadowRoot.getElementById('myChart2')
        this.chartTwo(myChart2)
        const myChart3= this.shadowRoot.getElementById('myChart3')
        this.chartTHree(myChart3)
        
    }
    chartOne(myChart){

        //console.log(myChart)
        const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
        const yValues = [55, 49, 44, 24, 18];
        const barColors = ["red", "green","blue","orange","brown"];

        new Chart(myChart, {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
            data: yValues
            }]
        },
        options: {
            legend: {display: false},
            title: {
            display: true,
            text: "World Wine Production 2018"
            }
        }
        });
    }
    chartTwo(myChart){

        //console.log(myChart)
        const xValues = [50,60,70,80,90,100,110,120,130,140,150];
        const yValues = [7,8,8,9,9,9,10,11,14,14,15];
        
        new Chart(myChart, {
          type: "line",
          data: {
            labels: xValues,
            datasets: [{
              fill: false,
              lineTension: 0,
              backgroundColor: "rgba(0,0,255,1.0)",
              borderColor: "rgba(0,0,255,0.1)",
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            scales: {
              yAxes: [{ticks: {min: 6, max:16}}],
            }
          }
        });
    }
    chartTHree(myChart){

        //console.log(myChart)
        const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];
const barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});
    }
    render() {
        
    }
}
customElements.define('dash-component', DashComponent)