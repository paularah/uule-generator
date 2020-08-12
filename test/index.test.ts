import uule from '../src/index'

describe('creates UULE from name', () => {
    it('it should return a valid uule', () =>{
        expect(uule.generateFromName('Abuja')).toBe('w+CAIQICInQWJ1amEsRmVkZXJhbCBDYXBpdGFsIFRlcnJpdG9yeSxOaWdlcmlh')
    })

    it('its should return a valid uule for new york', () => {
        expect(uule.generateFromCanonical('Lezigne,Pays de la Loire,France')).toBe('w+CAIQICIfTGV6aWduZSxQYXlzIGRlIGxhIExvaXJlLEZyYW5jZQ')
    })
})