 // Função responsável por atualizar as frases
 function atualizar()
 {
     // Fazendo requisição AJAX
     $.post('atualizar.php', function (frase) {
       //   console.log(frase);
          //  console.log(frase[0].Peso);
          // LIMPA TODA A TELA ANTES DE ATUALIZAR

        //  console.log(frase)



          $('#container1').empty();

          $('#container2').empty();

          $('#container3').empty();

          $('#container4').empty();
          
          
          $('#container').empty();


          var divTitulo = $("<div></div>");
          var divTitulo2 = $("<div></div>");
          var divTitulo3 = $("<div></div>");
          var divTitulo4 = $("<div></div>");
          
          divTitulo.addClass("flex");
          divTitulo.attr("id", "container1");
          divTitulo.append("<h2>ESFRIANDO</h2>");
          divTitulo.append("<hr>");
          $("#container1").append(divTitulo);
       
          divTitulo2.addClass("flex");
          divTitulo2.attr("id", "container2");
          divTitulo2.append("<h2>BOBINANDO</h2>");
          divTitulo2.append("<hr>");
          $("#container2").append(divTitulo2);
          
          divTitulo3.addClass("flex");
          divTitulo3.attr("id", "container3");
          divTitulo3.append("<h2>EMBALANDO</h2>");
          divTitulo3.append("<hr>");
          $("#container3").append(divTitulo3);
          
          divTitulo4.addClass("flex");
          divTitulo4.attr("id", "container4");
          divTitulo4.append("<h2>BOBINANDO</h2>");
          divTitulo4.append("<hr>");
          $("#container4").append(divTitulo4);
          
          
          for (var i = 0; i < frase.length; i++) {
            
            var novaDiv = $("<div></div>");
            
            
            
              if(frase[i].Status == 1) {
                  
                //   var novaDiv = $("<div></div>");
                  novaDiv.addClass("flex");
                  novaDiv.attr("id", "container1");
                  novaDiv.append("<h2>STATUS: " + frase[i].Status + "</h2>")
                  novaDiv.append("<h3>ID: " + frase[i].Id + "</h2>");
                  novaDiv.append("<p>MENSAGEM: " + frase[i].Mensagem + "</p>");
                  novaDiv.append("<button class='btn btn-secondary'><a href='alterar-.php"+'?id='+ frase[i].Id + "'> <-  </a></button>");
                  novaDiv.append("  -- --   -- --");
                  novaDiv.append("<button class='btn btn-info'><a href='alterar+.php"+'?id='+ frase[i].Id + "'> ->  </a></button>");
                  novaDiv.append("<hr>");
                  $("#container1").append(novaDiv);
                  
                }

                
                if  (frase[i].Status == 2) {


                    //  var novaDiv = $("<div></div>");
                      var id = $(frase[i].Id);
                     novaDiv.addClass("flex");
                     novaDiv.attr("id", "container2");
                     novaDiv.append("<h2>STATUS: " + frase[i].Status + "</h2>");
                     novaDiv.append("<h3>ID: " + frase[i].Id + "</h2>");
                     novaDiv.append("<p>MENSAGEM: " + frase[i].Mensagem + "</p>");
                     novaDiv.append("<button class='btn btn-secondary'><a href='alterar-.php"+'?id='+ frase[i].Id + "'> <-  </a></button>");
                        novaDiv.append("  -- --   -- --");
                        novaDiv.append("<button class='btn btn-info'><a href='alterar+.php"+'?id='+ frase[i].Id + "'> ->  </a></button>");
                     novaDiv.append("<hr>");
                     $("#container2").append(novaDiv);

                    }
                    
                if  (frase[i].Status == 3 ) {


                        // var novaDiv = $("<div></div>");
                        novaDiv.addClass("flex");
                        novaDiv.attr("id", "container3");
                        novaDiv.append("<h2>STATUS: " + frase[i].Status + "</h2>");
                        novaDiv.append("<h3>ID: " + frase[i].Id + "</h2>");
                        novaDiv.append("<p>MENSAGEM: " + frase[i].Mensagem + "</p>");
                        novaDiv.append("<button class='btn btn-secondary'><a href='alterar-.php"+'?id='+ frase[i].Id + "'> <-  </a></button>");
                        novaDiv.append("  -- --   -- --");
                        novaDiv.append("<button class='btn btn-info'><a href='alterar+.php"+'?id='+ frase[i].Id + "'> ->  </a></button>");
                        novaDiv.append("<hr>");
                        $("#container3").append(novaDiv);
                        
                    }
                
                    if  (frase[i].Status == 4) {
                        
                        
                        // var novaDiv = $("<div></div>");
                        novaDiv.addClass("flex");
                        novaDiv.attr("id", "container4");
                        novaDiv.append("<h2>STATUS: " + frase[i].Status + "</h2>");
                        novaDiv.append("<h3>ID: " + frase[i].Id + "</h2>");
                        novaDiv.append("<p>MENSAGEM: " + frase[i].Mensagem + "</p>");
                        novaDiv.append("<button class='btn btn-secondary'><a href='alterar-.php"+'?id='+ frase[i].Id + "'> <-  </a></button>");
                        novaDiv.append("  -- --   -- --");
                        novaDiv.append("<button class='btn btn-info'><a href='alterar+.php"+'?id='+ frase[i].Id + "'> ->  </a></button>");
                        novaDiv.append("<hr>");
                        $("#container4").append(novaDiv);
                    }
                }





            }, 'JSON');
        }
                    // Definindo intervalo que a função será chamada
                    setInterval("atualizar()", 2000);
                    // Quando carregar a página
                    $(function() {
                        // Faz a primeira atualização
                    atualizar();


 });