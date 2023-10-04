const whatsappModel = require("../shared/whatsappModels"); 
const whatsappService = require("../services/whatsappService");

//--------------------------------------------------------------------------------------------------------------------------------------------
function Process (textUser, number){
    textUser = textUser.toLowerCase();
    var models = [];
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Muestra el saludo
    if(textUser.toLowerCase().includes("hola") || textUser.includes("hello")){
        var model = whatsappModel.MessageText("¡Hola! ¿En qué puedo ayudarte hoy?", number);
        models.push(model); 

        var modelList = whatsappModel.MessageList(number);
        models.push(modelList);
    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Muestra la ubicacion Fisica 
    else if(textUser.toLowerCase().includes("donde estan ubicados") || 
        textUser.includes("Cual es la ubicación") || 
        textUser.includes("donde estan ubicados?") ||
        textUser.includes("dame la ubicados?"))
    {
        //Intruduccion a la Ubicación
        var model = whatsappModel.MessageText("🚩 Claro que si estamos ubicaciod en la siguiente dirección: 🚩", number);
        models.push(model); 

        //Mensaje que le muestra la Ubicacion
        var modelLocation = whatsappModel.MessageLocation(number);
        models.push(modelLocation);

    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Dar el agradecimiento
    else if(textUser.toLowerCase().includes("gracias") || textUser.includes("thanks")){
        var model = whatsappModel.MessageText("Gracias a ti por existir TQM 🤩🤩", number);
        models.push(model);

    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Decir adios
    else if(textUser.toLowerCase().includes("adios") || textUser.includes("bye")){
        var model = whatsappModel.MessageText("Hasta luego my love", number);
        models.push(model); 
    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Info nevera
    else if(textUser.toLowerCase().includes("nevera")){
        var model = whatsappModel.MessageImageOne(number);
        models.push(model);

        var model = whatsappModel.MessageBuyNevera(number);
        models.push(model);
    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Info licudara 
    else if(textUser.toLowerCase().includes("licuadora")){
        var model = whatsappModel.MessageImageTwo(number);
        models.push(model);

        var model = whatsappModel.MessageBuyLicuadora(number);
        models.push(model);

    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Info lavadora 
    else if(textUser.toLowerCase().includes("lavadora")){
        var model = whatsappModel.MessageImageThree(number);
        models.push(model);

        var model = whatsappModel.MessageBuyLavadora(number);
        models.push(model);

    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // comprar qr 
    else if(textUser.toLowerCase().includes("comprar")){
        var model = whatsappModel.MessageImageQR(number);
        models.push(model);

        var model = whatsappModel.MessageText("con este codigo QR puedes comprar este producto", number);
        models.push(model); 
    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Ubicacion de la agencia 
    else if(textUser.toLowerCase().includes("agencia")){
        //Intruduccion a la Ubicación
        var model = whatsappModel.MessageText("🚩 Esta es la ubicacion de nuestra agencia: 🚩", number);
        models.push(model);

        var model = whatsappModel.MessageLocation(number);
        models.push(model);

    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Mostrar again el listado
    else if(textUser.toLowerCase().includes("mostrar listado")){
        var model = whatsappModel.MessageList(number);
        models.push(model);
    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Centro de contacto 
    else if(textUser.toLowerCase().includes("contacto")){
        var model = whatsappModel.MessageText("*Centro de contacto:* \n +57 3006886607",number);
        models.push(model);

    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // horario de atencion 
    else if(textUser.toLowerCase().includes("¿cual es su horario de atencion?")){
        var model = whatsappModel.MessageText("*Este es el horario de atención:* \n Lunes: 9:00 AM - 5:00 PM \n Martes: 9:00 AM - 5:00 PM \n Miercoles: 9:00 AM - 5:00 PM \n Jueves: 9:00 AM - 5:00 PM \n Viernes: 9:00 AM - 5:00 PM \n Sabado: 10:00 AM - 2:00 PM \n Domingo; Cerrado",number);
        models.push(model);
    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Eventos
    else if(textUser.toLowerCase().includes("¿cuáles son sus próximos eventos?")){
        var model = whatsappModel.MessageWithEvents("*Próximos Eventos:* \n Evento 1 - 10 de octubre a las 3:00 PM \n Evento 2 - 15 de octubre a las 6:30 PM \n Evento 3 - 22 de octubre a las 4:45 PM", number);
        models.push(model);
    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Recomendaciones 
    else if (textUser.toLowerCase().includes("recomiéndame electrodomésticos")) {
        var electrodomesticos = [
            "1. Refrigerador de doble puerta con dispensador de agua",
            "2. Lavadora de carga frontal con tecnología de ahorro de energía",
            "3. Horno de convección multifuncional",
            "4. Cafetera programable con molinillo integrado",
            "5. Aspiradora robot inteligente con mapeo",
        ];
    
        var model = whatsappModel.MessageWithProducts(electrodomesticos, number);
        models.push(model);
    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Reservar fecha 
    else if (textUser.toLowerCase().includes("reservar fecha")) {
        // Pedimos al usuario que ingrese la fecha y detalles en un solo mensaje
        var modelAskForDetails = whatsappModel.MessageText("Por favor, ingresa la fecha y detalles de la reserva en formato DD/MM/AAAA HH:MM - Detalles adicionales", number);
        models.push(modelAskForDetails);
    
        // Suponemos que la respuesta del usuario tiene el formato correcto: DD/MM/AAAA HH:MM - Detalles adicionales
        const userResponse = ""; // Esto es solo un ejemplo, debes ajustarlo según tus necesidades
    
        // Aquí simplemente dividimos la respuesta en fecha y detalles
        const [userDate, userDetails] = userResponse.split(" - ");
    
        // Creamos la reserva con la fecha y detalles
        const reservationDetails = {
            date: userDate,
            details: userDetails
        };
    
        // Enviamos el mensaje con los detalles de la reserva
        var modelReservation = whatsappModel.MessageWithReservation("¡Fecha reservada con éxito!", number, reservationDetails);
        models.push(modelReservation);
    }    
//--------------------------------------------------------------------------------------------------------------------------------------------
    // suscripcion
    // else if (textUser.toLowerCase().includes("suscribirme al boletin") || textUser.includes("suscribirme")) {
    //     var model = whatsappModel.MessageText("🤩 Woooooo quieres suscribirte a nuestro boletin muchas gracias🤩 \n Solo dame tu correo para poder añadirte a la lista \n Mira aca hay una vista previa de como te va a llegar a tu correo, solo dame tu", number);
    //     models.push(model);

    //     var model = whatsappModel.MessageText("Este es nuestro boletin: ", number);
    //     models.push(model);
    
    //     var model = whatsappModel.MessageSubscriptionConfirmation(number);
    //     models.push(model);   
    // }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Calificación
    else if(textUser.toLowerCase().includes("calificar") || textUser.includes("quiero calificar")){
        var model = whatsappModel.MessageText("🤩Muchas gracias por calificar nuestro servicio, calificanos del (1-5)🤩 \n 1 ⭐ \n  2 ⭐⭐  \n 3 ⭐⭐⭐ \n 4 ⭐⭐⭐⭐ \n 5 ⭐⭐⭐⭐⭐", number);
        models.push(model);
    }
    //Agradecimiento por calificar
    else if(textUser.toLowerCase().includes("1") || textUser.includes("2") || textUser.includes("3") || textUser.includes("4") || textUser.includes("5")){
        var model = whatsappModel.MessageText("Muchas gracias por calificarnos, si tienes algun problema o comentario puedes comunicarnos con nosotros", number);
        models.push(model);
        
        var model = whatsappModel.MessageText("*Centro de contacto:* \n +57 3006886607",number);
        models.push(model);

    }
    
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Redes sociales 
    else if(textUser.toLowerCase().includes("cuales son sus redes sociales") || textUser.toLowerCase().includes("redes sociales") ){
        var model = whatsappModel.MessageLink(number);
        models.push(model); 
    }
//--------------------------------------------------------------------------------------------------------------------------------------------
// No entiendo
    else{
        var model = whatsappModel.MessageText("No te entiendo por DIOS D: ", number);
        models.push(model); 
    }

    models.forEach(model => {
        whatsappService.SendMessageWhatsApp(model); 
    });
}


module.exports = {
    Process
}

