function MessageText(textResponse, number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "text": {
            "preview_url": true,
            "body": textResponse
        },
        "type": "text"
    });
    return data;
} 

function MessageList(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "Tenemos estas opciones"
            },
            "footer": {
                "text": "Dale en ver opciones para desplegar la lista: "
            },
            "action": {
                "button": "Ver Opciones",
                "sections": [
                    {
                        "title": "Compra y vende productos",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title":"Comprar",
                                "description":"Compra los mejores productos para tu hogar"
                            },
                            {
                                "id": "main-vender",
                                "title":"Vender",
                                "description":"Vende tus productos"
                            }
                        ]
                    },
                    {
                        "title": "Centro de atención",
                        "rows": [
                            {
                                "id": "main-agencia",
                                "title":"Agencia",
                                "description":"Visita nuestra agencia"
                            },
                            {
                                "id": "main-contacto",
                                "title":"Centro de contacto",
                                "description":"Te atendera uno de nuestros agentes"
                            }
                        ]
                    }
                ]
            }
        } 
    });
    return data;
}

function MessageLocation(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "location",
        "location": {
        "latitude":"6.245223491094524",
        "longitude":"-75.56272067023943",
        "name":"CESDE",
        "address":"Carrera 42 #48-20 Edificio Cesde, Medellín, Antioquia"
    }
});
return data;
}

function MessageBuy(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "😉 Selecciona uno de los productos: 😉"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-laptop",
                            "title": "💻 Laptop 💻"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-phone",
                            "title": "📱 Computadora 📱"
                        }
                    }
                ]
            }
        } 
    });
    return data;
}

module.exports = {
    MessageText,
    MessageList,
    MessageBuy,
    MessageLocation
}