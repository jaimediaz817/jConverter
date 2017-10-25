const expect = require('chai').expect
const jconverter = require('..').default


describe('#jconverter', function() {

    it('Inicializar el modulo', function(){
        const test1 = jconverter();
        const test2 = test1.iniciar()        
        expect(test2).to.equal(0)
    })

    it('Convertir de Kilos a Libras', function(){
        const test1 = jconverter();
        const test2 = test1.calcularMedidas("kg", "lb", 94)
        expect(test2).to.equal(188)
    })

    it('Convertir de libras a Kilos', function(){
        const test1 = jconverter();
        const test2 = test1.calcularMedidas("lb", "kg", 188)
        expect(test2).to.equal(94)
    })
})
