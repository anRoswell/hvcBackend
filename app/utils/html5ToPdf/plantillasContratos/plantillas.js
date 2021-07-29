/**
 * @name PlantillasContratos
 * @type Class
 * @description Clase base de la cual extienden los modelos de la aplicación
 * @author Alfons Navarro
 */

const path = require('path')
const fs = require('fs')
const imgs = require('./../../../utils/imgs/img.json')

class PlantillasContratos {
	plantilla1() {
		return '<h1>HOLA</h1>'
	}

	plantilla2() {
		// const base64str = this.base64_encode(path.join(__dirname, '', 'backgroundEditado.png'))
		// const firmaRepresentante = this.base64_encode(path.join(__dirname, '', 'logo-color.png'))
		// const img = imgs.imgLogo
		// const imgRteLegal = imgs.imgRteLegal
		// const signUser = data.dataContratoPdf.firma
		// 	? `<img src="${data.sign}" style="width:150px; height: 150px"></img>`
		// 	: ''

		let plantilla2 = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8" />
              <title>PDF Result Template</title>
              <link rel="stylesheet" href="./css/index.css">
            </head>
            <body>
              <div class="container">
                
                <div class="head">
                  <div class="titulo">
                    <span class="letraC">B</span>H<span class="letraC">C</span> 
                  </div>
                  <div class="subTitulo">
                    <div id="tituloDivRight">BITÁCORA DE VISITAS POR PROFESIONAL </div>
                    <div id="subTituloDivRight">
                      IPS DOMICIALIARIA BEST HOME CARE
                    </div>
                  </div>
                </div>
                
                
                <div class="subtitulo">
                  <span id="slogan">BEST HOME CARE</span> Nit. 900.687.491-8
                </div> 
                  
                <div class="fondoIdentificacion">IDENTIFICACIÓN</div>

                <div class="formularioTop">
                  <div class="divInterno divInternoBottom"></div>
                  <div class="divInterno divInternoBottom" ></div>
                  <div class="divInterno divInternoBottom" >Genero: (M)</div>
                  <div class="divInterno divInternoBottom" >EDAD:</div>
                  <div class="divInterno divInternoBottom" ></div>
                </div>

                <div class="formularioTop">
                  <div class="divInterno">NOMBRE (S) APELLIDO (S)</div>
                  <div class="divInterno">No. IDENTIFICACIÓN</div>
                  <div class="divInterno"></div>
                  <div class="divInterno"></div>
                  <div class="divInterno">OCUPACIÓN</div>
                </div>

                <div class="formularioTop25">
                  <div class="divInterno25 divInternoBottom"></div>
                  <div class="divInterno25 divInternoBottom"></div>
                  <div class="divInterno25 divInternoBottom"></div>
                  <div class="divInterno25 divInternoBottom"></div>
                </div>

                <div class="formularioTop">
                  <div class="divInterno25">DIRECCIÓN</div>
                  <div class="divInterno25">TELÉFONO (S)</div>
                  <div class="divInterno25">EPS</div>
                  <div class="divInterno25">NOMBRE DEL CUIDADOR</div>
                </div>

                <div class="formularioTop25">
                  <div class="divInterno25 divInternoBottom"></div>
                  <div class="divInterno25 divInternoBottom"></div>
                  <div class="divInterno25 divInternoBottom"></div>
                  <div class="divInterno25 divInternoBottom"></div>
                </div>

                <div class="formularioTop">
                  <div class="divInterno25">ESPECIALIDAD</div>
                  <div class="divInterno25">No. DE ACTIVIDADES</div>
                  <div class="divInterno25">NO DE	AUTORIZACIÓN</div>
                  <div class="divInterno25">PARENTESCO</div>
                </div>

                <div class="formularioTop100 divInternoBottom">
                </div>

                <div class="formularioTop">
                  <div class="divInterno100">DIAGNÓSTICO MÉDICO</div>
                </div>

                <table align="center" border="1" cellpadding="1" cellspacing="1" style="width: 100%; margin-top:15px">
                  <thead class="fondoIdentificacion">
                    <tr>
                      <th colspan="1" rowspan="2" scope="col" style="text-align: center; vertical-align: middle">No</th>
                      <th colspan="1" rowspan="2" scope="col">FECHA</th>
                      <th colspan="2" rowspan="1" scope="col">HORA</th>
                      <th colspan="1" rowspan="2" scope="col">FIRMA DEL PACIENTE Y/O CUIDADOR</th>
                      <th colspan="1" rowspan="2" scope="col">NOMBRE Y DOCUMENTO DEL PROFESIONAL</th>
                      <th colspan="1" rowspan="2" scope="col">OBSERVACIONES</th>
                    </tr>
                    <tr>
                      <th scope="col">INICIO</th>
                      <th scope="col">FINAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="text-align: center; vertical-align: middle">1</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="text-align: center; vertical-align: middle">2</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="text-align: center; vertical-align: middle">3</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="text-align: center; vertical-align: middle">4</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="text-align: center; vertical-align: middle">5</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="text-align: center; vertical-align: middle">6</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="text-align: center; vertical-align: middle">7</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="text-align: center; vertical-align: middle">8</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="text-align: center; vertical-align: middle">9</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="text-align: center; vertical-align: middle">10</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="text-align: center; vertical-align: middle">11</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="text-align: center; vertical-align: middle">12</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="text-align: center; vertical-align: middle">13</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="text-align: center; vertical-align: middle">14</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="text-align: center; vertical-align: middle">15</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="text-align: center; vertical-align: middle">16</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="text-align: center; vertical-align: middle">17</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="text-align: center; vertical-align: middle">18</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td style="text-align: center; vertical-align: middle">19</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </body>
          </html>

      `
		return plantilla2
	}

	base64_encode(file) {
		// read binary data
		console.log(file)
		const bitmap = fs.readFileSync(file)
		// convert binary data to base64 encoded string
		return new Buffer.from(bitmap).toString('base64')
	}
}

module.exports.PlantillasContratos = PlantillasContratos
