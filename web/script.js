document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault()

        const adina = Number(document.getElementById("Adina").value.trim);
        const telefonoa = document.getElementById("Telefonoa").value.trim();
        const email = document.getElementById("email").value.trim();
        const posta = document.getElementById("Posta-kodea").value.trim();
        const mezumota = document.querySelector('input[name="Mezu mota"]:checked');
        const mezu = document.getElementById("mezua").value.trim();
        const bai = document.getElementById("Datu babesa");

        let error = false

        // Adina 65 baino gehiago edo 16 baino gutxiago =================================

        if(adina < 16 || adina > 65){

                alert("16 eta 65 tarteko adina izan behar duzu.");
                error = true

         }else{

                //alert("Bien");

        };

        // Telefonoa 9 zifra baino gehiago ==============================================

        if(telefonoa.length === 9){

                //alert("Bien");

        }else{

                alert("9 Zenbaki izan behar ditu telefonoa.");
                error = true


        };

        // Email @ eta . dauka ===========================================================

        if(email.includes("@") && email.includes(".")){

                //alert("Bien");
        }else{

                alert("@ eta . izan behar ditu email-ak.");
                error = true


        };

        // Posta-kodea ==================================================================

       if(posta.length === 5){

               // alert("Bien");

        }else{

                alert(" 5 zenbaki izan behar ditu posta kodea.");
                error = true


        };

        // Mezu mota ====================================================================

       if(error === true){

        alert("Zerbait txarto edo faltan dago.");

       }else{       

        switch(mezumota.value){

                case "zalantza":
                        alert("24 ordu-tan kontaktuan jarriko gara.");
                break; 
                
                case "iradokizuna":
                        alert("72 ordu-tan kontaktuan jarriko gara.");
                break;

                case "kexa":
                        alert("12 ordu-tan kontaktuan jarriko gara.");
                break;

                case "beste batzuk":
                        alert("48 ordu-tan kontaktuan jarriko gara.");
                break;

        }};

        // Mezua =======================================================================

        if(mezu.length < 25){

                alert("Minimo 25 karaktere izan behar du mezua.")

        }else{

                //alert("ondo")

        };

        // Datu babesa =================================================================

        if(bai.checked){

               // alert("Ondo");

        }else{

                alert("Datu babesa derrigorreskoa da.");

        };

});