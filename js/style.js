document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.querySelector("#htmli");
    const s1 = document.querySelector("#htmld");
    const h2 = document.querySelector("#cssi");
    const s2 = document.querySelector("#cssd");
    const h3 = document.querySelector("#jsi");
    const s3 = document.querySelector("#jsd");
    const h4 = document.querySelector("#pyi");
    const s4 = document.querySelector("#pyd");
    const h5 = document.querySelector("#ci");
    const s5 = document.querySelector("#cd");
    const h6 = document.querySelector("#cpi");
    const s6 = document.querySelector("#cpd");
    const h7 = document.querySelector("#mati");
    const s7 = document.querySelector("#matd");
    const h8 = document.querySelector("#rust");
    const s8 = document.querySelector("#rusted");
    
    h1.addEventListener("mouseout", function() {
        s1.style.fontSize = "0px";
    });
    h1.addEventListener("mouseover", function() {
        s1.style.fontSize = "14px";
    });
    
    h2.addEventListener("mouseout", function() {
        s2.style.fontSize = "0px";
    });
    h2.addEventListener("mouseover", function() {
        s2.style.fontSize = "14px";
    });
    
    h3.addEventListener("mouseout", function() {
        s3.style.fontSize = "0px";
    });
    h3.addEventListener("mouseover", function() {
        s3.style.fontSize = "14px";
      });
      
      h4.addEventListener("mouseout", function() {
          s4.style.fontSize = "0px";
        });
        h4.addEventListener("mouseover", function() {
            s4.style.fontSize = "14px";
        });
        
        h5.addEventListener("mouseout", function() {
            s5.style.fontSize = "0px";
        });
        h5.addEventListener("mouseover", function() {
            s5.style.fontSize = "14px";
        });
        
        h6.addEventListener("mouseover", function() {
          s6.style.fontSize = "14px";
        });
        h6.addEventListener("mouseout", function() {
            s6.style.fontSize = "0px";
        });
        h7.addEventListener("mouseover", function() {
            s7.style.fontSize = "14px";
          });
          h7.addEventListener("mouseout", function() {
              s7.style.fontSize = "0px";
          });
        h8.addEventListener("mouseover", function() {
            s8.style.fontSize = "14px";
          });
          h8.addEventListener("mouseout", function() {
              s8.style.fontSize = "0px";
          });
    });