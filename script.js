 // Função responsável por atualizar as frases
 function atualizar()
 {
     // Fazendo requisição AJAX
     $.post('atualizar.php', function (frase) {
       //   console.log(frase);
          //  console.log(frase[0].Peso);
          // LIMPA TODA A TELA ANTES DE ATUALIZAR

          console.log(frase)



          $('#container1').empty();

          $('#container2').empty();

          $('#container3').empty();

          $('#container4').empty();




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

                }else if  (frase[i].Status == 2) {


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

                    }else if  (frase[i].Status == 3 ) {


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
                        
                    }else if  (frase[i].Status == 4) {
                        
                        
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