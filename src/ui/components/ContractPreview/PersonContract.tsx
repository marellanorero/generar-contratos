import React from "react";
import { Contract } from "../../../core/entities/Contract";
import { getPartyRut } from "@/core/entities/utils/getPartyRut";
import { getCapacityString } from "@/core/entities/utils/getCapacityString";
import { useContract } from "@/ui/hooks/useContract";

interface Props {
    contract: Contract;
}

export const PersonContract: React.FC<Props> = ({ contract }) => {

    return (
        <div className="p-4 border rounded-xl shadow-md bg-white">
            <h2 className="text-xl font-bold mb-2 text-center">Contrato de Arrendamiento</h2>

            <p>
                En Santiago de Chile, a  <strong>{contract.createdAt.toLocaleDateString()}</strong>, comparecen: BG BODEGAS S.p.A., sociedad comercial del giro de Arriendo de Bodegas, Rol Único Tributario
                77.365.227-0, representada según se acreditará por don GERMAN ALBERTO ROJAS GONZALEZ, chileno, soltero, ingeniero civil en sistemas,
                cédula nacional de identidad número 14.703.000-2 y  don BERNARDO MARCELO ARELLANO  ASTUDILLO,  chileno,  divorciado,  ingeniero  comercial,
                cédula nacional de identidad número 6.872.948- 3, todos domiciliados en calle Exequiel Fernández Nº2301, comuna de Macul, Santiago,
                en  adelante  “La arrendadora” o “la parte arrendadora”,  y  <strong>{contract.party.name}</strong> Rol Único Tributario N° <strong>{getPartyRut(contract.party)}</strong>  domiciliado(a) en  <strong>{contract.party.address}</strong>,
                comuna  de  <strong>{contract.party.comuna}</strong>, en adelante  “la parte arrendataria”, todos los comparecientes mayores de edad quienes acreditan su identidad
                con las cédulas mencionadas y exponen:
            </p>
            <br></br>
            <p>
                <strong className="subtitulo">PRIMERO: </strong> Por este acto, BG BODEGAS S.p.A. sociedad comercial del giro de Arriendo de Bodegas debidamente representada, declara Ser la
                sub  arrendataria  de la propiedad  ubicada  en  calle Exequiel Fernández Nº2301 y 2321, de la comuna de Macul, según consta en contrato de
                arrendamiento celebrado con Servicios Consultorías y Operaciones Logísticas Benar Limitada, con  fecha 14 de marzo de 2014, ante el Notario
                Público de Santiago don Felix Jara Cadot, acuerdo de voluntades que en su cláusula novena otorga de manera expresa a la arrendataria la
                facultad de sub arrendar.
            </p>
            <br></br>
            <p>
                <strong className="subtitulo">SEGUNDO: </strong> Por este acto, BG BODEGAS S.p.A., sociedad comercial del giro de Arriendo de Bodegas debidamente representada da en
                arrendamiento a <strong>{contract.party.name}</strong>, Rol Único Tributario <strong>{getPartyRut(contract.party)}</strong>, quien, debidamente representada, acepta parte de la propiedad ubicada en Exequiel
                Fernández N°2301 Bodega <strong>{contract.warehouse.location}</strong> de la comuna de Macul, identificada en el plano adjunto y que pasa a formar parte integrante
                del presente Contrato de Arrendamiento, de aproximadamente <strong>{contract.warehouse.capacity}</strong> metros cuadrados ( {getCapacityString(contract.warehouse.capacity)} ), en adelante e
                indistintamente referido como el “inmueble”.
            </p>
            <br></br>
            <p>
                <strong className="subtitulo">TERCERO: </strong> Esta propiedad será destinada a almacenaje de productos en general, Bodegas de materiales varios y trabajo
                administrativo, técnico y contable. En ningún caso tendrá destino habitacional.

                El horario de atención será de lunes a viernes de 8:30 a 18:30 horas y sábado de 09:00 a 14:00 horas.
            </p>
            <br></br>
            <div>
                <p><strong className="subtitulo">CUARTO – Renta de Arrendamiento: </strong> La renta de arrendamiento será la suma de <strong>${contract.rentalPrice}</strong> uf. La renta está exenta de
                    IVA y se emitirán facturas exentas de ese impuesto.
                    <br></br>
                    El canon de arrendamiento señalado  , deberá pagarse en forma anticipada dentro de los primeros 5 días del mes en curso,
                    en las dependencias del ARRENDADOR, por medio transferencia o depósito a la cuenta bancaria del ARRENDADOR u otros.
                </p>
                <br></br>
                <p>El hecho de que el ARRENDATARIO mantenga su bodega desocupada durante parte o todo el período de vigencia del
                    presente contrato o que no reciba un aviso de cobranza, no lo exime de la obligación de pagar el canon de arrendamiento
                    correspondiente.
                </p>
                <br></br>
                <p>Si la fecha de inicio del contrato de arrendamiento no es el primer día del mes, se cobrará la fracción proporcional de la renta
                    que corresponda según el día en que comenzó el arrendamiento.
                </p>
                <br></br>
                <p>En caso que el ARRENDATARIO ponga término al Contrato antes de la fecha pactada, todo pago anticipado de rentas de
                    arrendamiento que hubiere efectuado el ARRENDATARIO, podrá ser retenido por la ARRENDADORA a título de indemnización de perjuicios, no teniendo derecho el ARRENDATARIO a solicitar devolución alguna.
                </p>
            </div>
            <br></br>
            <p>
                <strong className="subtitulo">QUINTO: </strong> La entrega material de las bodegas y oficina se efectuará el día <strong>{contract.materialDeliveryDate.toLocaleDateString()}</strong>.
            </p>
            <br></br>
            <p>
                <strong className="subtitulo">SEXTO - Vigencia: </strong>El presente contrato tendrá un plazo de <strong>{contract.durationDays}</strong> a contar del día <strong>{contract.startDate.toLocaleDateString()}</strong> y vencerá el
                día <strong>{contract.endDate.toLocaleDateString()}</strong>. Sin perjuicio de lo anterior, Este plazo se prorrogará tácita, sucesiva y automáticamente por
                períodos iguales de <strong>{contract.extensionDeadlineDays}</strong>, salvo que alguna de las partes notifique a la otra su intención de no perseverar,
                mediante aviso que deberá ser enviado por carta certificada al domicilio fijado en este Contrato o vía correo electrónico a la
                respectiva contraparte, con a lo menos <strong>{contract.resignationNoticeDays}</strong> de anticipación al vencimiento del plazo o de cualquiera de sus
                prórrogas. Para todos los efectos vencerá el día 02 de enero de 2026. Para todos los efectos legales, el correo electrónico de la
                arrendadora será; barellano@benar.cl  o  b.arellano.n@benar.cl  Por  parte  de  la arrendataria, el correo electrónico autorizado
                para recibir y remitir las notificaciones citadas será:
            </p>
            <br></br>
            <table border="1" cellPadding="8" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cargo</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={contract.warehouse.id}>
                        <td>{contract.warehouse.responsiblePerson}</td>
                        <td>{contract.warehouse.responsiblePersonPosition}</td>
                        <td>{contract.warehouse.emailResponsiblePerson}</td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <p>
                <strong className="subtitulo">SÉPTIMO: </strong> La arrendadora no responderá en caso alguno por robos o hurtos que puedan ocurrir en la propiedad o
                por perjuicios que pueda sufrir la arrendataria y no es responsable por perjuicios producidos por desastres de la
                naturaleza ni debido a caso fortuito o de fuerza mayor. De la misma manera, la arrendataria no será responsable por
                daños o perjuicios producidos a la propiedad por caso fortuito o de fuerza mayor.

            </p>
            <br></br>
            <p>
                <strong className="subtitulo">OCTAVO - Terminación del contrato: </strong> <br></br>
                Si en el Contrato se pactó una vigencia semanal, el ARRENDADOR podrá poner término al presente contrato en cualquier
                momento sin expresión de causa, debiendo dar aviso al ARRENDATARIO con al menos 2 días corridos de
                anticipación a la fecha en que se quiera poner término al contrato.
                El ARRENDADOR, en caso de pactar un arriendo mensual, podrá poner término al presente contrato en cualquier
                momento sin expresión de causa, debiendo dar aviso al ARRENDATARIO con al menos 15 días corridos de
                anticipación a la fecha en que se quiera poner término al contrato.
                En caso que las partes hayan pactado un arriendo a plazo fijo superior a 30 días, deberá el ARRENDADOR dar aviso al
                ARRENDATARIO con al menos 30 días corridos de anticipación a la fecha en que se quiera poner término al contrato.
                En ambos casos, el aviso deberá ser por escrito al domicilio del ARRENDATARIO indicado en el presente contrato y
                además al correo electrónico señalado.
                Sin perjuicio del término anticipado, el ARRENDATARIO deberá cumplir con la obligación de hacer el pago de las rentas
                devengadas hasta el día de la entrega
                material de la Minibodega arrendada, fecha en la cual se le pondrá término al Contrato.
                El ARRENDATARIO a su vez, podrá poner término al presente contrato, dando aviso por escrito a
                BG BODEGAS SPA por medio de carta certificada a la casa matriz ubicada en Avda Exequiel Fernández 2301, comuna de Macul,
                Santiago o vía correo electrónico a barellano@benar.cl a lo menos 15 días de anticipación a la fecha establecida para su
                vencimiento inicial o alguna de sus prórrogas, con excepción de los contratos cuya vigencia sea semanal, ya que en estos
                casos, deberá dar aviso del término con a los menos 2 días corridos de anticipación.
                El no dar aviso en los tiempos y formas ya señalados, obligará a la ARRENDATARIA a pagar el canon de arriendo completo
                del período inmediatamente siguiente.
                Adicionalmente, el simple retardo de 15 días corridos en el pago de la renta, contados desde el día del vencimiento o de
                cualquiera de sus renovaciones y/o en caso que la unidad arrendada quede sin candado del ARRENDATARIO por más de 7 días seguidos,
                se presumirá que ha hecho abandono, dará derecho al ARRENDADOR a poner término inmediato al presente contrato y a hacer efectivo
                lo establecido en la cláusula vigésimo cuando el periodo de no pago exceda de 60 días, contados desde el día del vencimiento o
                cualquiera de sus renovaciones.
            </p>
            <br></br>
            <p>
                <strong className="subtitulo">NOVENO - Uso e ingreso y facultad de DESCERREJAMIENTO: </strong> <br></br>
                El ingreso y uso de la bodega será controlado por el ARRENDATARIO mediante un candado de su propiedad cuya llave mantendrá en su poder. El ARRENDADOR bajo ninguna circunstancia será depositario de las llaves de la bodega.
                Todo mal uso o extravío del candado y su llave, serán de exclusiva responsabilidad del ARRENDATARIO.
                Ante la eventualidad que el ARRENDATARIO extravíe las llaves de su candado, el ARRENDADOR podrá abrir el candado existente y abrir la bodega, previa solicitud por escrito del ARRENDATARIO, lo que tendrá un costo de 1 unidad de fomento que deberá pagarse en forma previa a la apertura del candado, siendo este importe de cargo exclusivo del ARRENDATARIO. El no cumplimiento de la obligación antes mencionada por parte del ARRENDATARIO, será multado con 3 unidades de fomento, cifra que serán sumadas a la renta del mes respectivo.
                La bodega cuenta con dos porta candados, siendo sólo uno de uso exclusivo del ARRENDATARIO.

                Será también de exclusiva responsabilidad del ARRENDATARIO, el correcto uso y cuidado de los equipos, elementos y espacios comunes disponibles para efectuar las labores de carga y descarga, así como la mantención y el aseo de dichos espacios. El ARRENDATARIO deberá observar en todo momento las normas establecidas en el Reglamento de Uso de Bodegas BG BODEGAS SPA, de forma tal que evite en todo momento causar en ellas daño o molestias a los demás arrendatarios.

            </p>
            <br></br>
            <p>
                <strong className="subtitulo">DÉCIMO - Accidentes: </strong> <br></br>
                El ARRENDATARIO no podrá responsabilizar al ARRENDADOR de cualquier accidente que sufra dentro de las instalaciones, cuya causa sea atribuible al mal uso o manipulación de equipos o elementos de cualquier naturaleza, sean éstos parte de las instalaciones, de su propiedad o de terceros. Es responsabilidad del ARRENDATARIO solicitar la información necesaria para el uso adecuado de las instalaciones, su equipamiento y servicios.
                El ARRENDADOR declara haber dado en forma clara y precisa toda la información en relación al uso de las instalaciones y bienes comunes de las Minibodegas para su correcto uso. El ARRENDATARIO declara por su parte, conocer la referida información y obligarse a usar adecuadamente las instalaciones y bienes comunes del inmueble donde se encuentra emplazada la Minibodega.
                El ARRENDATARIO es responsable de todo daño o perjuicio material o civil que pudiese causar en los bienes almacenados en las bodegas vecinas, ya sea por, y a modo de ejemplo, sin considerar el siguiente listado como taxativo, daños provocados por el personal que ingrese a la Minibodega para cargar, descargar o cualquier otra actividad; mala estibación; derrame de líquidos o cualquier material tóxico o corrosivo; malas maniobras o mal uso de vehículos de carga y descarga; entre otros.

            </p>
            <br></br>
            <p>
                <strong className="subtitulo">DÉCIMO - Accidentes: </strong> <br></br>
                El ARRENDATARIO no podrá responsabilizar al ARRENDADOR de cualquier accidente que sufra dentro de las instalaciones, cuya causa sea atribuible al mal uso o manipulación de equipos o elementos de cualquier naturaleza, sean éstos parte de las instalaciones, de su propiedad o de terceros. Es responsabilidad del ARRENDATARIO solicitar la información necesaria para el uso adecuado de las instalaciones, su equipamiento y servicios.
                El ARRENDADOR declara haber dado en forma clara y precisa toda la información en relación al uso de las instalaciones y bienes comunes de las Minibodegas para su correcto uso. El ARRENDATARIO declara por su parte, conocer la referida información y obligarse a usar adecuadamente las instalaciones y bienes comunes del inmueble donde se encuentra emplazada la Minibodega.
                El ARRENDATARIO es responsable de todo daño o perjuicio material o civil que pudiese causar en los bienes almacenados en las bodegas vecinas, ya sea por, y a modo de ejemplo, sin considerar el siguiente listado como taxativo, daños provocados por el personal que ingrese a la Minibodega para cargar, descargar o cualquier otra actividad; mala estibación; derrame de líquidos o cualquier material tóxico o corrosivo; malas maniobras o mal uso de vehículos de carga y descarga; entre otros.

            </p>
            <br></br>
            <p>
                <strong className="subtitulo">DÉCIMO PRIMERO - Propiedad y naturaleza de las especies: </strong> <br></br>
                El ARRENDADOR no podrá revisar ni registrar las especies y bienes ingresados a la Minibodega, ni menos certificar su cantidad o calidad. Por este motivo el ARRENDATARIO en este acto declara que únicamente introducirá y mantendrá en la Minibodega especies que no tengan un origen ilegal o sancionado por la ley, que sean de su exclusivo dominio, o cuyo uso y goce tenga título legítimo o justa causa para su tenencia.

            </p>
            <br></br>
            <p>
                <strong className="subtitulo">DÉCIMO SEGUNDO - Facultades del ARRENDADOR frente al incumplimiento del ARRENDATARIO: </strong> <br></br>
                Las partes acuerdan, según la naturaleza del presente contrato, que se encuentran incorporados al arrendamiento otros servicios necesarios para la buena marcha del establecimiento, motivo por el cual el ARRENDATARIO reconoce, acepta y autoriza en forma expresa que en caso de no pago de las rentas u otro incumplimiento del presente contrato, el ARRENDADOR pueda colocar en la puerta de la bodega respectiva, un candado que impida el acceso del ARRENDATARIO. De este modo, reconoce y acepta que la puerta de la Minibodega cuenta con dos porta candados, y que uno de ellos es de exclusivo y reservado uso del ARRENDADOR. El uso de este porta candado o la colocación por parte del ARRENDATARIO de más de un candado, facultará a BG BODEGAS SPA, al descerrajamiento de cualquiera de uno de ellos, con cargo y costo al ARRENDATARIO. La infracción por segunda vez de esta prohibición, facultará al Arrendador para poner término ipso facto el presente contrato, a descerrajar la bodega ante notario quién levantará acta, a desocupar la bodega, a trasladar o realizar mudanza de especies a lugares de acopio si fuese necesario.

            </p>
            <br></br>
            <p>
                <strong className="subtitulo">DÉCIMO TERCERO - Restitución: </strong> <br></br>
                Para proceder a la restitución de la bodega, el ARRENDATARIO deberá cumplir con los siguientes requisitos: (i) estar al día en el pago de sus rentas, (ii) haber dado el aviso correspondiente en el tiempo y forma ya señalados en la cláusula SEPTIMA; (iii) y haber suscrito el finiquito que se adjunta como Anexo 2 del presente documento en el horario que se indica en la cláusula Noveno. En todo caso el ARRENDATARIO autoriza para suscribir en su nombre y representación dicho finiquito a cualquiera de las personas individualizadas en la cláusula Segundo del presente contrato.
                <br></br>
                Al término del arrendamiento, por cualquier causa, el ARRENDATARIO se obliga entonces a restituir la Minibodega arrendada al ARRENDADOR en los términos previstos a continuación: (UNO) Con ocasión de la restitución de la Minibodega, se levantará un acta en la cual se dejará constancia de las condiciones de restitución y que se incluirá en el finiquito(DOS) La Minibodega debe restituirse a más tardar en la fecha de término del contrato, especificada en el artículo precedente, libre de las instalaciones, muebles de cualquier especie, que hayan sido introducidas por la ARRENDATARIA, quien como se ha indicado, podrá retirar sólo aquellas que no causen detrimento de ninguna especie en la Minibodega. El retardo en la restitución de la Minibodega arrendada hará incurrir a la ARRENDATARIA en una multa ascendente a 1 Unidad de Fomento por cada día de atraso en la restitución. La permanencia de la ARRENDATARIA con posterioridad a la fecha de vencimiento del presente contrato, no significará de modo alguno la renovación del ARRENDAMIENTO ni aún en los casos contemplados en el inciso final del artículo 1.956 del Código Civil. (TRES) La ARRENDATARIA deberá restituir la Minibodega en las mismas condiciones en que le fuera entregado, habida consideración del natural desgaste producido por el uso legítimo de éste, y con los recibos que acrediten el pago de los consumos de agua, energía eléctrica y otros, si procediere, hasta el último día en que la haya ocupado materialmente. (CUATRO) En el evento que la arrendataria no de cumplimiento íntegro y oportuno a las obligaciones precedentes indicadas en esta cláusula, habiendo sido requerido para ello por escrito por la ARRENDADOR, por este acto, la ARRENDATARIA, de conformidad al artículo 241 y siguientes del Código de Comercio, confiere a la ARRENDADOR un mandato especial e irrevocable, para que esta última, actuando a través de cualquiera de sus apoderados, proceda a cerrar la Minibodega, pudiendo emplear al efecto, cualquier medio apto, pudiendo también abrir e inventariar la mercadería y bienes que se encontrare en su interior, impedir que la ARRENDATARIA y su personal dependiente puedan ingresar al mismo, desocupar íntegramente la Minibodega, depositar las mercaderías y bienes que se encontraren en su interior en corrales municipales o bodegas particulares, siendo el costo de bodegaje y riesgo de la pérdida y daños que ellos sufran, de exclusiva responsabilidad de la ARRENDATARIA. Así mismo, y mediante el mandato conferido, se faculta a la ARRENDADOR a donar, rematar, enajenar, entregar en comodato, o celebrar cualquier otro acto o contrato de similares características que le permita mitigar, cubrir y saldar la deuda que la ARRENDATARIA mantenga para con el ARRENDADOR, entregándose a la ARRENDATARIA el excedente, si lo hubiere. Podrá de igual forma la ARRENDADOR, interrumpir el suministro de energía eléctrica y agua potable de la Minibodega, si correspondiere. Las partes dejan constancia que la utilización de alguno de los procedimientos precedentemente indicados, no implicará renuncia al ejercicio de otras vías que tuviere el ARRENDADOR para obtener la restitución de la Minibodega.

            </p>
            <br></br>
            <p>
                <strong className="subtitulo">DÉCIMO CUARTO: </strong> <br></br>
                La arrendadora, no se hace responsable de cualquier trámite que efectúe la arrendataria ante la I. Municipalidad de Macul o ante cualquier otro Servicio Público, o Autoridad, para obtener   patente   comercial o  documento   alguno   para   su funcionamiento, siendo todos estos trámites de responsabilidad exclusiva de la arrendataria. No obstante, lo anterior la arrendadora debe entregar el inmueble para el fin u objeto de este contrato, esto es, para que el inmueble sirva y pueda ser dispuesto como bodega y otros fines descritos en la cláusula tercera de este contrato. En tal sentido, serán de cargo de la arrendadora, toda información, documentación y/o trámite que sólo pueda ser obtenido, diligenciado, tramitado o solicitado por la arrendadora, siempre y cuando aquello permita el uso y tenencia pacífica de la propiedad, por la arrendataria y para los fines mismos de este contrato. Un ejemplo de las obligaciones que gravan a la arrendadora, es la entrega del certificado de recepción final, con el destino de bodega, del inmueble.
            </p>
            <br></br>
            <p>
                <strong className="subtitulo">DÉCIMO QUINTO: </strong> <br></br>
                La arrendataria NO podrá subarrendar, ceder o transferir a cualquier título la propiedad. Queda prohibido además a la arrendataria el introducir en la propiedad arrendada, materiales explosivos o mal olor y/o animales domésticos o peligrosos.

            </p>
            <br></br>
            <p>
                <strong className="subtitulo">DÉCIMO SEXTO: </strong> <br></br>
                La arrendadora en este acto se obliga a entregar la propiedad perfectamente limpia. Las mejoras que pueda efectuar la arrendataria, podrán ser retiradas por ésta, siempre y cuando, el retiro no cause detrimento al inmueble arrendado. Estas mejoras sólo podrán hacerse con la autorización escrita de la arrendadora. Sin embargo, las mejoras cuyo retiro signifique daño a la propiedad, quedarán en beneficio de ésta desde el momento  mismo en que sean  efectuadas,  sin  que  la arrendadora deba pagar suma alguna por ellas, cualquiera sea su carácter, naturaleza o monto, sin perjuicio que pueda convenirse otra norma por escrito al respecto.

            </p>
            <br></br>
            <p>
                <strong className="subtitulo">DÉCIMO SÉPTIMO: </strong> <br></br>
                La arrendataria se obliga a restituir el inmueble inmediatamente que termine este Contrato de arrendamiento, entrega que deberá hacerse mediante la desocupación total de la propiedad arrendada, poniéndola a disposición de la arrendadora y entregándole las llaves en el mismo estado en que recibió la propiedad, salvo el desgaste del uso legítimo de las cosas según el uso al que están destinadas.

            </p>
            <br></br>
            <p>
                <strong className="subtitulo">DÉCIMO OCTAVO: </strong> <br></br>
                La arrendataria se obliga a dar las facilidades necesarias para que la arrendadora o quien la represente, pueda visitar el inmueble una vez cada tres meses, previo aviso, en días y horarios de oficina, según lo acuerdan las partes, con a lo menos cinco días hábiles de anticipación. Así mismo, la arrendataria se obliga a permitir la visita de la arrendadora a lo menos tres días de cada semana, durante dos horas cada día entre las 12 y 18 horas, a su elección, los últimos sesenta días que ocupe la propiedad.

            </p>
            <br></br>
            <p>
                <strong className="subtitulo">DÉCIMO NOVENO: </strong> <br></br>
                <span className="sub">Garantía de Arriendo.</span> A fin de garantizar la conservación de la propiedad, su restitución en el mismo estado en que  la recibe, el pago por los perjuicios y deterioros que se causen en la propiedad arrendada, sus servicios e instalaciones, y en general, para responder al fiel cumplimiento de las estipulaciones de este Contrato, la arrendataria entrega en garantía a la arrendadora, en este acto, la suma de 6,3 UF (seis coma tres) <span className="sub">Unidades de Fomento</span>, equivalente en pesos moneda nacional, correspondiente a un mes de arrendamiento, que ésta se obliga a devolver, reajustada en valor de acuerdo al último mes de arriendo vigente, al término del presente Contrato, dentro de los quince días siguientes a la restitución de la propiedad arrendada, quedando desde luego autorizada la arrendadora para descontar de la cantidad mencionada el valor efectivo de los deterioros y perjuicios de cargo de la arrendataria que se hayan ocasionado, como asimismo, el valor de las cuentas pendientes de energía eléctrica u otras si las hubiere. Si esta garantía no alcanzare a cubrir los gastos mencionados, que son de cuenta de la arrendataria, ésta deberá pagarlos dentro de los diez días siguientes a la fecha en la cual se formule por escrito dicha cobranza. La mora en la restitución de la garantía impondrá a la arrendadora la obligación de pagar sobre ella el máximo interés legal para operaciones de crédito en dinero, así como todas las costas judiciales que demande su eventual cobranza.

            </p>
            <br></br>
            <p>
                <strong className="subtitulo">VIGÉSIMO: </strong> <br></br>
                <span className="sub">Domicilio.</span> Para todos los efectos legales, las partes fijan su domicilio en la ciudad de Santiago, y se someten a la jurisdicción de sus Tribunales Ordinarios de Justicia.

            </p>
            <br></br>
            <p>
                <strong className="subtitulo">VIGÉSIMO PRIMERO: </strong> <br></br>
                <span className="sub">Personería.</span> La personería de GERMAN ALBERTO ROJAS GONZALEZ y BERNARDO MARCELO ARELLANO ASTUDILLO, consta en la escritura pública de fecha 13 de marzo del año 2014, ante el Notario Público de Santiago, don Félix Jara Cadot, la que no se inserta por ser conocidas de las partes y del Notario autorizado.
            </p>

            <table cellPadding="8" cellSpacing="0" className="firma">
                <thead>
                    <tr>
                        <th>
                            <p><strong>German A. Rojas Gonzalez</strong></p>
                            <p><strong>Bernardo M. Arellano Astudillo</strong></p>
                        </th>
                        <th>
                            <p><strong>{contract.party.name}</strong></p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>PP BG BODEGAS S.P.A SOLID OPTION </td>
                        <td>PP CORP DE OPORT Y ACCION </td>
                    </tr>
                </tbody>
            </table>
            <button type="submit">
                Guardar y Descargar contrato
            </button>
        </div>
    )
}