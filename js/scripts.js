function Mudarestado(el) {
  var display = document.getElementById(el).style.display;
  if (display == "none") document.getElementById(el).style.display = "block";
  else document.getElementById(el).style.display = "none";
}

jQuery(document).ready(function(){
  $("#cb_state").change(function() {
      changeESTADO(this.value)
  });
});


function changeESTADO(estado) {
 
  switch (estado) {
    case "ba":
      var ba =
        '<h1 class="heading-9">REPRESENTANTES:</h1><h1 class="heading-9">BAHIA</h1></br><p class="paragraph-6">NOME: INDEBA EXPRESS </br> TELEFONE: (71) 3215-5848 </br> E-MAIL: contato@indebaexpress.com.br </br> Salvador/BA  </br></br>NOME: HIGTOP </br> TELEFONE: (71) 3045-9900 </br> E-MAIL: faleconosco@higtop.com.br </br> Salvador/BA </br></br> NOME: MAGIC CLEAN </br> TELEFONE: (71) 3289-9450 </br> E-MAIL: contato@magiccleanlimpeza.com.br </br> Salvador/BA </br></br>NOME: UNILIMPE </br> TELEFONE: (71) 3504-0382 </br> E-MAIL: vendas1@unilimpe.com.br </br> Salvador/BA </br></br>NOME: LINHA FORTE </br> TELEFONE: (71) 3505-0550  </br> E-MAIL: linhaforte@linhaforte.com </br> Salvador/BA </br></br>NOME: ATAKADINHO BAHIA </br> TELEFONE: (71) 3258-9343  </br> E-MAIL: vendas@atakadinhobahia.com.br </br> Salvador/BA </br></br>]NOME: INSTRUMENTAL SÃO JORGE </br> TELEFONE: (73) 3617-7289  </br> E-MAIL: vendas@instrumentalsaojorge.com.br </br> Itabuna/BA </br></br>NOME: CABRAL PLÁSTICOS </br> TELEFONE: (73) 3215-0227  </br> E-MAIL: - </br> Itabuna/BA </br></br>NOME: LIMPACTOR </br> TELEFONE: (77) 8857-8003  </br> E-MAIL: - </br> Vitória da Conquista/BA </br></br>NOME: LIMPEL </br> TELEFONE: (77) 3611-4454  </br> E-MAIL: tales@grupolimpel.com.br </br> Barreiras/BA </br></br>NOME: ARMAZÉM ITACARÉ </br> TELEFONE: -  </br> E-MAIL: - </br> Itacaré/BA </br></br>NOME: LIMPE JÁ </br> TELEFONE: (75) 99166-4712  </br> E-MAIL: - </br> Itaberaba/BA </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = ba;
      break;

    case "se":
      var se =
        '<h1 class="heading-9">REPRESENTANTES:</h1><h1 class="heading-9">SERGIPE</h1></br><p class="paragraph-6">NOME: SHOPPING DA LIMPEZA </br> TELEFONE: (79) 3042-6858 </br> E-MAIL: - </br> Aracajú/SE </br></br>NOME: ATAKADÃO DO CONDOMÍNIO </br> TELEFONE: (79) 4101-9616 </br> E-MAIL: atacadaodocondominio.aju@gmail.com </br> Aracajú/SE </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = se;
      break;

    case "rs":
      var rs =
        '<h1 class="heading-9">REPRESENTANTES:</h1><h1 class="heading-9">RIO GRANDE DO SUL</h1></br><p class="paragraph-6">NOME: AGI SUL </br> TELEFONE: (51) 3464-8000 </br> E-MAIL: vendas@amplars.com.br </br> Canoas/RS </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = rs;
      break;

    case "sp":
      var sp =
        '<h1 class="heading-9">REPRESENTANTES:</h1><h1 class="heading-9">SÃO PAULO</h1></br><p class="paragraph-6">NOME: MERCOCLEAN</br> TELEFONE: (14) 3441-4888 </br> E-MAIL: mercoclean@uol.com.br </br> Tupã/SP </br></br>NOME: HIGIRIB </br> TELEFONE: (16) 3285-0150 </br> E-MAIL: contato@higirib.com.br </br> Ribeirão Preto/SP </br></br>NOME: JOFRAN </br> TELEFONE: (14) 3622-6799 </br> E-MAIL: jofran@jofranjau.com.br </br> Jaú/SP </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = sp;
      break;

    case "ce":
      var ce =
        '<h1 class="heading-9">REPRESENTANTES:</h1><h1 class="heading-9">CEARÁ</h1></br><p class="paragraph-6">NOME: D&M</br> TELEFONE: (85) 3045-7895 </br> E-MAIL: megaclean_ce@yahoo.com.br </br> Fortaleza/CE </br></br>NOME: LIMP BRASIL </br> TELEFONE: - </br> E-MAIL: - </br> Fortaleza/CE </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = ce;
      break;

    case "to":
      var to =
        '<h1 class="heading-9">REPRESENTANTES:</h1><h1 class="heading-9">TOCANTINS</h1></br><p class="paragraph-6">NOME: LIMPEL</br> TELEFONE: (63) 3214-2870 </br> E-MAIL: comercial@grupolimpel.com.br </br> Palmas/TO </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = to;
      break;

    case "ma":
      var ma =
        '<h1 class="heading-9">REPRESENTANTES:</h1><h1 class="heading-9">MARANHÃO</h1></br><p class="paragraph-6">NOME: AMPLAMAR</br> TELEFONE: (98) 3878-3435 </br> E-MAIL: amplamar@amplamar.com.br </br> São Luís/MA </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = ma;
      break;

    case "rn":
      var rn =
        '<h1 class="heading-9">REPRESENTANTES:</h1><h1 class="heading-9">RIO GRANDE DO NORTE</h1></br><p class="paragraph-6">NOME: MVP</br> TELEFONE: (84) 3272-1332 </br> E-MAIL: belnat.indeba@hotmail.com </br> Natal/RN </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = rn;
      break;

    case "pi":
      var pi =
        '<h1 class="heading-9">REPRESENTANTES:</h1><h1 class="heading-9">PIAUÍ</h1></br><p class="paragraph-6">NOME: DIPALIMP</br> TELEFONE: (86) 3304-5301 </br> E-MAIL: dipalimpdistribuidora@gmail.com </br> Teresina/PI </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = pi;
      break;

    case "pb":
      var pb =
        '<h1 class="heading-9">REPRESENTANTES:</h1><h1 class="heading-9">PARAIBA</h1></br><p class="paragraph-6">NOME: HIGITEC</br> TELEFONE: (83) 3335-3809 </br> E-MAIL: comercial@higtecsolucoes.com.br </br> Campina Grande/PB </br></br>NOME: REPLASTIL </br> TELEFONE: (83) 3341-4724 </br> E-MAIL: - </br> João Pessoa/PB </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = pb;
      break;

    case "rj":
      var rj =
        '<h1 class="heading-9">REPRESENTANTES:</h1><h1 class="heading-9">RIO DE JANEIRO</h1></br><p class="paragraph-6">NOME: UNICLEAN</br> TELEFONE: (22) 2731-1904 </br> E-MAIL: sac@topcleanbrasil.com.br </br> Campos dos Goytacazes/RJ </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = rj;
      break;

    case "pa":
      var pa =
        '<h1 class="heading-9">REPRESENTANTES:</h1><h1 class="heading-9">PARÁ</h1></br><p class="paragraph-6">NOME: LIMPEX</br> TELEFONE: (91) 3254-2800 </br> E-MAIL: irmaosanjos.limpex@gmail.com </br> Belém/PA </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = pa;
      break;

    default:
      console.log("não existe parceiros no estado - scripts.js");
  }
  if(estado != "") $("#cb_state").val(estado);
  
}
