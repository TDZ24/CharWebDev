//--------------------------------------------------------------------------------------------------------------------------------------------
//Text
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
//--------------------------------------------------------------------------------------------------------------------------------------------
//Lista de funciones
function MessageList(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "😈 Escoge lo que quieres hacer con nosotros 😈"
            },
            "footer": {
                "text": "👌 Dale en ver opciones para desplegar la lista 👌"
            },
            "action": {
                "button": "Ver Opciones",
                "sections": [
                    {
                        "title": "Centro de atención",
                        "rows": [
                            {
                                "id": "main-agencia",
                                "title":"Agencia",
                                "description":"Visita nuestra agencia"
                            },
                            {
                                "id": "main-ver",
                                "title":"Ver Productos",
                                "description":"Vistazo rapido a nuestros productos"
                            },
                            {
                                "id": "main-contacto",
                                "title":"Centro de contacto",
                                "description":"Te atendera uno de nuestros agentes"
                            },
                            {
                                "id": "main-horario-atencion",
                                "title":"Horario de atencion",
                                "description":"Mira el horario de atencion"
                            },
                            {
                                "id": "main-evento",
                                "title":"Mostrar eventos",
                                "description":"Mira nuestros eventos"
                            },
                            {
                                "id": "main-recomendaciones",
                                "title":"Mostrar recomendaciones",
                                "description":"Recomendaciones para ti"
                            },
                            {
                                "id": "main-reservaciones",
                                "title":"Reservaciones",
                                "description":"Reserva tu espacio con nosotros"
                            }
                        ]
                    },
                    {
                        "title": "Despedida",
                        "rows": [
                            {
                                "id": "main-calificar",
                                "title":"calificar",
                                "description":"No te olvides de calificar nuestros servicios"
                            },
                            {
                                "id": "main-reclamos",
                                "title":"quejarse",
                                "description":"Puedes hacer tu retroalimentacion"
                            },
                            {
                                "id": "main-redes",
                                "title":"Redes sociales",
                                "description":"No te olvides seguirnos en todas las redes sociales"
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}
//Lista de Productos
function MessageListProducts(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "✅ Tenemos estos productos disponibles ✅"
            },
            "footer": {
                "text": "👌 Dale en ver opciones para desplegar la lista 👌"
            },
            "action": {
                "button": "Ver Opciones",
                "sections": [
                    {
                        "title": "Compra productos",
                        "rows": [
                            {
                                "id": "main-nevera",
                                "title":"Nevera",
                                "description":"Nevera Full stack Junior"
                            },
                            {
                                "id": "main-licuadora",
                                "title":"Licuadora",
                                "description":"Licuadora Rompe Front-Ends"
                            },
                            {
                                "id": "main-lavadora",
                                "title":"Lavadora",
                                "description":"Lavadora de cerebros"
                            },
                            {
                                "id": "main-volver",
                                "title":"Mostrar listado",
                                "description":"Vuelve a ver el listado de acciones"
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}
//--------------------------------------------------------------------------------------------------------------------------------------------
//Imagen Nevera
function MessageImageOne(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "image",
        "image": {
            "link": "https://media.aldiaferreteria.com/2393-home_default/nevera-black-series-ca-cr-312b-232lts.jpg"
        }
    });
    return data;
}
//--------------------------------------------------------------------------------------------------------------------------------------------
//Imagen Licuadora
function MessageImageTwo(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "image",
        "image": {
            "link": "https://mueblesdummi.com/wp-content/uploads/2018/11/Licuadora-tradicional-oster.jpg"
        }
    });
    return data;
}
//--------------------------------------------------------------------------------------------------------------------------------------------
//Imagen Lavadora
function MessageImageThree(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "image",
        "image": {
            "link": "https://images.hola.com/imagenes/decoracion/20210804194089/lavadora-carga-frontal-superior-nu/0-982-103/lavadora-carga-frontal-superior-hola-decoracion-t.jpg"
        }
    });
    return data;
}
//--------------------------------------------------------------------------------------------------------------------------------------------
//Imagen qr
function MessageImageQR(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "image",
        "image": {
            "link": "https://i.imgur.com/iF9gdTo.png"
        }
    });
    return data;
}
//--------------------------------------------------------------------------------------------------------------------------------------------
//Ubicacion
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
//--------------------------------------------------------------------------------------------------------------------------------------------
//Boton de mostrar listado de acciones
function MessageReturn(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "Si quieres regresar al listado dale click"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-regresar-listado",
                            "title": "Mostrar listado"
                        }
                    }
                ]
            }
        }
    });
    return data;
}
//--------------------------------------------------------------------------------------------------------------------------------------------
//Boton de compra nevera
function MessageBuyNevera(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "Escoge lo que quieres hacer con este producto"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-comprar-nevera",
                            "title": "Comprar"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-regresar-menu",
                            "title": "Mostrar listado"
                        }
                    }
                ]
            }
        }
    });
    return data;
}
//--------------------------------------------------------------------------------------------------------------------------------------------
//Boton de compra Licuadora
function MessageBuyLicuadora(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "Escoge lo que quieres hacer con este producto"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-comprar-licuadora",
                            "title": "Comprar"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-regresar-listado",
                            "title": "Mostrar listado"
                        }
                    }
                ]
            }
        }
    });
    return data;
}
//Boton de compra Lavadora
function MessageBuyLavadora(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "Escoge lo que quieres hacer con este producto"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-comprar-lavadora",
                            "title": "Comprar"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-regresar-listado",
                            "title": "Mostrar listado"
                        }
                    }
                ]
            }
        }
    });
    return data;
}
//--------------------------------------------------------------------------------------------------------------------------------------------
//Recomendaciones de productos
function MessageWithProducts(products, number){
    const productText = "*Aquí tienes algunas sugerencias de electrodomésticos:* \n" +
                       products.join("\n");

    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text": {
            "preview_url": true,
            "body": productText
        },
        "type": "text"
    });

    return data;
}
//--------------------------------------------------------------------------------------------------------------------------------------------
//Calendario de eventos
function MessageWithEvents(textResponse, number) {
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
//--------------------------------------------------------------------------------------------------------------------------------------------
//Reservacion
function MessageWithReservation(textResponse, number, reservationDetails) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text": {
            "preview_url": true,
            "body": textResponse
        },
        "type": "text",
        "reservation": reservationDetails
    });
    return data;
}
//--------------------------------------------------------------------------------------------------------------------------------------------
//Suscripcion
function MessageSubscriptionConfirmation(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "type": "document",
        "document": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf"
        }
    });
    return data;
}
//--------------------------------------------------------------------------------------------------------------------------------------------
//Links de redes sociales
function MessageLink(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text": {
            "preview_url": true,
            "body": "Visita nuestras redes sociales para más información: https://www.cesde.edu.co/"
        }
    });
    return data;
}
//--------------------------------------------------------------------------------------------------------------------------------------------
//Links de encuesta
function MessageLinkForm(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text": {
            "preview_url": true,
            "body": "Realiza nuestra encuesta de opiniones: https://forms.office.com/r/EsSYLA6fbh"
        }
    });
    return data;
}

//--------------------------------------------------------------------------------------------------------------------------------------------
//Modulos para exportar

module.exports = {
    MessageText,
    MessageList,
    MessageListProducts,
    MessageBuyNevera,
    MessageBuyLicuadora,
    MessageBuyLavadora,
    MessageLocation,
    MessageImageOne,
    MessageImageTwo,
    MessageImageThree,
    MessageImageQR,
    MessageWithProducts,
    MessageWithEvents,
    MessageWithReservation,
    MessageSubscriptionConfirmation,
    MessageLink,
    MessageLinkForm, 
    MessageReturn
}