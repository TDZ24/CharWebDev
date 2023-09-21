const whatsappModel = require("../shared/whatsappModels"); 
const whatsappService = require("../services/whatsappService");

function Process (textUser, number){
    textUser = textUser.toLowerCase();
    var models = [];
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Muestra el saludo
    if(textUser.includes("hola") || textUser.includes("hello")){
        var model = whatsappModel.MessageText("¡Hola! ¿En qué puedo ayudarte hoy?", number);
        models.push(model); 

        var modelList = whatsappModel.MessageList(number);
        models.push(modelList);
    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Muestra la ubicacion Fisica 
    else if(textUser.includes("donde estan ubicados") || 
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
    else if(textUser.includes("gracias") || textUser.includes("thanks")){
        var model = whatsappModel.MessageText("Gracias a ti por existir TQM 🤩🤩", number);
        models.push(model);

    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Decir adios
    else if(textUser.includes("adios") || textUser.includes("bye")){
        var model = whatsappModel.MessageText("Hasta luego my love", number);
        models.push(model); 
    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Comprar
    else if(textUser.includes("comprar")){
        var model = whatsappModel.MessageBuy(number);
        models.push(model);

    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Vender 
    else if(textUser.includes("vender")){
        var model = whatsappModel.MessageText("Debes de registrarte en el siguiente link para evaluarte: (LINK)", number);
        models.push(model);

    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Ubicacion de la agencia 
    else if(textUser.includes("agencia")){
        //Intruduccion a la Ubicación
        var model = whatsappModel.MessageText("🚩 Esta es la ubicacion de nuestra agencia: 🚩", number);
        models.push(model);

        var model = whatsappModel.MessageLocation(number);
        models.push(model);

    }
//--------------------------------------------------------------------------------------------------------------------------------------------
    // Centro de contacto 
    else if(textUser.includes("contacto")){
        var model = whatsappModel.MessageText("*Centro de contacto:* \n +57 3006886607",number);
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