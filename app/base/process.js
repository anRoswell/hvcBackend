/**
 * @name Process
 * @type Function
 * @description Función encargada de implementar las respuestas de los controladores de la aplicación
 * @author Jaime Castrillón
 */

const Process = ({
  success: (res, data, status = 200) => {
    res.status(status).json(data)
  },
  error: (res, error, status = 400) => {
    res.status(status).json(error)
  }
});

module.exports.Process = Process