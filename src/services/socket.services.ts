const startServer = (io) =>{
io.on("connection", (socket: any) => {
  console.log("conectado")
  let mensajesGuardados: any = [];
  socket.emit(
    "mensajes",
    mensajesGuardados.length > 0 ? mensajesGuardados : "Sin mensajes"
  );
  socket.on("mensaje", (mensaje: any) => {
    const { email, sms } = mensaje;
    const newMensaje = {
      email,
      sms,
      date: `${new Date().toLocaleString("es-MX")}`,
    };
    io.emit("mensajeEnviado", newMensaje);
  });
});}


export default startServer;
