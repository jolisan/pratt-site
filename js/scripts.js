function Mudarestado(el) {
  var display = document.getElementById(el).style.display;
  if (display == "none") document.getElementById(el).style.display = "block";
  else document.getElementById(el).style.display = "none";
}

function changeESTADO(estado) {
  switch (estado) {
    case "ba":
      var ba =
        '<h1 class="heading-9">REPRESENTANTES:</h1></br><center><table border="1"><tr><th>NOME:</th><th>TELEFONE:</th><th>E-MAIL:</th><th>CIDADE/ESTADO</th></tr><tr><td>INDEBA EXPRESS </td><td>  (71) 3215-5848 </td><td> contato@indebaexpress.com.br </td><td> Salvador/BA </td></tr><tr><td>HIGTOP </td><td>  (71) 3045-9900 </td><td> faleconosco@higtop.com.br </td><td> Salvador/BA </td></tr><tr><td>MAGIC CLEAN </td><td>  (71) 3289-9450 </td><td> contato@magiccleanlimpeza.com.br </td><td> Salvador/BA </td></tr><tr><td>UNILIMPE </td><td>  (71) 3504-0382 </td><td> vendas1@unilimpe.com.br </td><td> Salvador/BA </td></tr><tr><td>LINHA FORTE </td><td>  (71) 3505-0550 </td><td> linhaforte@linhaforte.com </td><td> Salvador/BA </td></tr><tr><td>ATAKADINHO BAHIA </td><td>  (71) 3258-9343 </td><td> vendas@atakadinhobahia.com.br </td><td> Salvador/BA </td></tr><tr><td>INSTRUMENTAL SÃO JORGE </td><td>(73) 3617-7289 </td><td> vendas@instrumentalsaojorge.com.br </td><td> Itabuna/BA </td></tr><tr><td>CABRAL PLÁSTICOS </td><td>(73) 3215-0227 </td><td> - </td><td> Itabuna/BA </td></tr><tr><td>LIMPACTOR </td><td>(77) 8857-8003 </td><td> - </td><td> Vitória da Conquista/BA </td></tr><tr><td>LIMPEL </td><td>(77) 3611-4454 </td><td> tales@grupolimpel.com.br </td><td> Barreiras/BA </td></tr><tr><td>ARMAZÉM ITACARÉ </td><td> - </td><td> - </td><td> Itacaré/BA </td></tr><tr><td>LIMPE JÁ </td><td>(75) 99166-4712 </td><td>-</td><td> Itaberaba/BA </td></tr></table></center>';
      document.getElementById("REPRESENTANTES").innerHTML = ba;
      break;

    case "se":
      var se =
        '<h1 class="heading-9">REPRESENTANTES:</h1></br><p class="paragraph-6">NOME: SHOPPING DA LIMPEZA </br> TELEFONE: (79) 3042-6858 </br> E-MAIL: - </br> Aracajú/SE </br></br>NOME: ATAKADÃO DO CONDOMÍNIO </br> TELEFONE: (79) 4101-9616 </br> E-MAIL: atacadaodocondominio.aju@gmail.com </br> Aracajú/SE </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = se;
      break;

    case "rs":
      var rs =
        '<h1 class="heading-9">REPRESENTANTES:</h1></br><p class="paragraph-6">NOME: AGI SUL </br> TELEFONE: (51) 3464-8000 </br> E-MAIL: vendas@amplars.com.br </br> Canoas/RS </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = rs;
      break;

    case "sp":
      var sp =
        '<h1 class="heading-9">REPRESENTANTES:</h1></br><p class="paragraph-6">NOME: MERCOCLEAN</br> TELEFONE: (14) 3441-4888 </br> E-MAIL: mercoclean@uol.com.br </br> Tupã/SP </br></br>NOME: HIGIRIB </br> TELEFONE: (16) 3285-0150 </br> E-MAIL: contato@higirib.com.br </br> Ribeirão Preto/SP </br></br>NOME: JOFRAN </br> TELEFONE: (14) 3622-6799 </br> E-MAIL: jofran@jofranjau.com.br </br> Jaú/SP </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = sp;
      break;

    case "ce":
      var ce =
        '<h1 class="heading-9">REPRESENTANTES:</h1></br><p class="paragraph-6">NOME: D&M</br> TELEFONE: (85) 3045-7895 </br> E-MAIL: megaclean_ce@yahoo.com.br </br> Fortaleza/CE </br></br>NOME: LIMP BRASIL </br> TELEFONE: - </br> E-MAIL: - </br> Fortaleza/CE </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = ce;
      break;

    case "to":
      var to =
        '<h1 class="heading-9">REPRESENTANTES:</h1></br><p class="paragraph-6">NOME: LIMPEL</br> TELEFONE: (63) 3214-2870 </br> E-MAIL: comercial@grupolimpel.com.br </br> Palmas/TO </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = to;
      break;

    case "ma":
      var ma =
        '<h1 class="heading-9">REPRESENTANTES:</h1></br><p class="paragraph-6">NOME: AMPLAMAR</br> TELEFONE: (98) 3878-3435 </br> E-MAIL: amplamar@amplamar.com.br </br> São Luís/MA </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = ma;
      break;

    case "rn":
      var rn =
        '<h1 class="heading-9">REPRESENTANTES:</h1></br><p class="paragraph-6">NOME: MVP</br> TELEFONE: (84) 3272-1332 </br> E-MAIL: belnat.indeba@hotmail.com </br> Natal/RN </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = rn;
      break;

    case "pi":
      var pi =
        '<h1 class="heading-9">REPRESENTANTES:</h1></br><p class="paragraph-6">NOME: DIPALIMP</br> TELEFONE: (86) 3304-5301 </br> E-MAIL: dipalimpdistribuidora@gmail.com </br> Teresina/PI </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = pi;
      break;

    case "pb":
      var pb =
        '<h1 class="heading-9">REPRESENTANTES:</h1></br><p class="paragraph-6">NOME: HIGITEC</br> TELEFONE: (83) 3335-3809 </br> E-MAIL: comercial@higtecsolucoes.com.br </br> Campina Grande/PB </br></br>NOME: REPLASTIL </br> TELEFONE: (83) 3341-4724 </br> E-MAIL: - </br> João Pessoa/PB </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = pb;
      break;

    case "rj":
      var rj =
        '<h1 class="heading-9">REPRESENTANTES:</h1></br><p class="paragraph-6">NOME: UNICLEAN</br> TELEFONE: (22) 2731-1904 </br> E-MAIL: sac@topcleanbrasil.com.br </br> Campos dos Goytacazes/RJ </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = rj;
      break;

    case "pa":
      var pa =
        '<h1 class="heading-9">REPRESENTANTES:</h1></br><p class="paragraph-6">NOME: LIMPEX</br> TELEFONE: (91) 3254-2800 </br> E-MAIL: irmaosanjos.limpex@gmail.com </br> Belém/PA </br></br></p>';
      document.getElementById("REPRESENTANTES").innerHTML = pa;
      break;

    default:
      console.log("não existe parceiros no estado - scripts.js");
  }
}
