import geoTarget from './geotarget'
import lengthMappings from './lengthMapping'
import params from './unique'



/**
 * 
 * @param {string} name - The location name 
 * @returns {string} uule - the UULE for the location 
 */
const generateFromName = (name:string):string => {
    const geoData = geoTarget.find( data => data['Name'] === name)
    if (!geoData){
        throw Error('Invalid location name!')
    }
    return generateFromCanonical(geoData['Canonical Name'])
}


/**
 * @param {string} canonicalName - the canonical name for the location
 * @returns {string} the UULE for the specified location 
 */

const generateFromCanonical = (canonicalName:string):string => {
    const validCanonical = geoTarget.find( data => data['Canonical Name'] === canonicalName)
    if(!validCanonical){
        throw Error('Invalid canonical name')
    }
    const lengthValue = lengthMappings[canonicalName.length]
    const encodedLocation = Buffer.from(canonicalName).toString('base64')
    return `${params}${lengthValue}${encodedLocation}`
}

export default () => {
    generateFromName
    generateFromCanonical
}
