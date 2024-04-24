let frecNes = 5;
let ANes = 15;
let frecInf = 0.4;
let AInf = 10;


const availableScreenWidth = window.screen.availWidth;
const availableScreenHeight = window.innerHeight;
console.log("Ширина", availableScreenWidth );
console.log("Длина", availableScreenHeight );


let frecNes_text = document.getElementById("frecNes_id");
let ANes_text = document.getElementById("ANes_id");
let frecInf_text = document.getElementById("frecInf_id");
let AInf_text = document.getElementById("AInf_id");
let koef_text = document.getElementById("koef_id");
let resultButton = document.getElementById('result');

showMessage(frecNes,ANes,frecInf,AInf);


function showMessage(frecNes,ANes,frecInf,AInf) {
    let massx = [];
    let massy = [];
    let massy2 = [];
    let massy3 = [];
    let massySpectorNesx = [];
    let massySpectorNesy = [];
    let massySpectorInfx = [];
    let massySpectorModx= [];
    let massySpectorInfy = [];
    let massySpectorMody= [];
    
    let wNes = 2*Math.PI*frecNes;
    let wInf = 2*Math.PI*frecInf;
    let koef=AInf/ANes;

    let T = 2*Math.PI/Math.min(wNes,wInf);
    //console.log("b: ", b, " w0: ",w0, "w: ", w , "w^2: ", w_2);
    for (let i =0; (i<2*T); i +=0.001){
        let Inf = AInf*Math.cos(wInf*i);
        let Nes = ANes*Math.cos(wNes*i);
        let Mod = Nes*(1+koef*Math.cos(wInf*i));
       
        massx.push(i)
        massy.push(Inf);
        massy2.push(Nes);
        massy3.push(Mod)
        //console.log("i: ", i, " q: ",q, "I: ", I, " U: ",U );
    }
    
    var SpectorInf = {
        type: 'bar',
        x: [-frecInf, frecInf],
        y: [AInf, AInf],
        width: 0.001,
        marker: {
            color: '#04BBEC',
            line: {
                width: 0.001
            }
        }
      };

      var SpectorNes = {
        type: 'bar',
        x: [-frecNes, frecNes],
        y: [ANes, ANes],
        width: 0.001,
        marker: {
            color: '#04BBEC',
            line: {
                width: 0.001
            }
        }
      };
      var SpectorMod = {
        type: 'bar',
        x: [-frecNes-frecInf,-frecNes,-frecNes+frecInf ,frecNes-frecInf,frecNes,frecNes+frecInf],
        y: [AInf/2,ANes,AInf/2,AInf/2, ANes,AInf/2],
        width: 0.001,
        marker: {
            color: '#FF82F4',
            line: {
                width: 0.001
            }
        }
      };


    var resultInf ={
        x: massx,
        y: massy,
        mode:'lines', line: {color: "#04BBEC"}
    };
    var resultNes ={
        x: massx,
        y: massy2,
        mode: 'lines', line: {color: "#04BBEC"}
    };
    var resultMod ={
        x: massx,
        y: massy3,
        mode: 'lines', line: {color: "#FF82F4"}
    };
    var resultInfS ={
        x: massySpectorInfx,
        y: massySpectorInfy,
        type: 'bar',
        width: 0.2,
        line: {color: "#04BBEC"}
    };
    var resultNesS ={
        x: massySpectorNesx,
        y: massySpectorNesy,
        type: 'bar',
        width: 0.2, 
        line: {color: "#FF82F4"}
    };
    var resultModS ={
        x: massySpectorModx,
        y: massySpectorMody,
        type: 'bar',
        width: 0.2,
        line: {color: "#FF82F4"}
    };
    var baseLayoutNes = {
        title: 'Несущий сигнал',
        autosize: true,
        height: 150,
        /*width: 1600,
        height: 300,*/
        xaxis: {
            title: 't,с',
            rangemode: 'tozero',
        },
        yaxis: {
            title: 'A',
        },
        margin: {
            l: 50,
            r: 20,
            b: 30,
            t: 50,
            pad: 0
          },
        font: {
            size: 9,
          }
    };
    var baseLayoutInf = {
        title: 'Информационный сигнал',
        autosize: true,
        height: 150,
        /*width: 1600,
        height: 300,*/
        xaxis: {
            title: 't,с',
            rangemode: 'tozero',
        },
        yaxis: {
            title: 'A',
        },
        margin: {
            l: 50,
            r: 20,
            b: 30,
            t: 50,
            pad: 0
          },
        font: {
            size: 9,
          }
    };
    var baseLayoutMod = {
        title: 'Амплитудная модуляция',
        autosize: true,
        height: 150,
        /*width: 1600,
        height: 300,*/
        xaxis: {
            title: 't,с',
            rangemode: 'tozero',
        },
        yaxis: {
            title: 'A',
        },
        margin: {
            l: 50,
            r: 20,
            b: 30,
            t: 50,
            pad: 0
          },
        font: {
            size: 9,
          }
    };
    var baseLayoutNesS = {
        title: 'Спектор несущего сигнала',
        autosize: true,
        height: 150,
        /*width: 1600,
        height: 300,*/
        xaxis: {
            title: 'f,1/с',
            rangemode: 'tozero',
        },
        yaxis: {
            title: 'Спектральная мощность, Дб',
        },
        margin: {
            l: 50,
            r: 20,
            b: 30,
            t: 50,
            pad: 0
          },
        font: {
            size: 9,
          }
    };
    var baseLayoutInfS = {
        title: 'Спектор информационного сигнала',
        autosize: true,
        height: 150,
        /*width: 1600,
        height: 300,*/
        xaxis: {
            title: 'f,1/с',
            rangemode: 'tozero',
        },
        yaxis: {
            title: 'Спектральная мощность, Дб',
        },
        margin: {
            l: 50,
            r: 20,
            b: 30,
            t: 50,
            pad: 0
          },
        font: {
            size: 9,
          }
    };
    var baseLayoutModS = {
        title: 'Спектор амплитудной модуляции',
        autosize: true,
        height: 150,
        /*width: 1600,
        height: 300,*/
        xaxis: {
            title: 'f,1/с',
            rangemode: 'tozero',
        },
        yaxis: {
            title: 'Спектральная мощность, Дб',
        },
        margin: {
            l: 50,
            r: 20,
            b: 30,
            t: 50,
            pad: 0
          },
        font: {
            size: 9,
          }
    };

    Plotly.react( 'tester', [resultInf], baseLayoutInf );
    Plotly.react( 'tester2', [resultNes], baseLayoutNes );
    Plotly.react( 'tester3', [resultMod], baseLayoutMod );
    Plotly.react( 'tester4', [SpectorInf], baseLayoutInfS );
    Plotly.react( 'tester5', [SpectorNes], baseLayoutNesS );
    Plotly.react( 'tester6', [SpectorMod], baseLayoutModS);
}

resultButton.onclick = function(){
    frecNes = frecNes_text.value;
    ANes = ANes_text.value;
    frecInf = frecInf_text.value;
    AInf = AInf_text.value*Math.PI/6;
    if (frecNes<=0 || frecInf <= 0){
        alert("Значения не могут быть неположительными!")
    }
    else if (frecInf>=frecNes){
        alert("Частота несущего сигнала должна быть больше информационного!")
    }
    else if (AInf>ANes){
        alert("Амплитуда несущего сигнала должна быть быльше информационного!")
    }
    else{
        showMessage(frecNes,ANes,frecInf,AInf);
    }

    
}