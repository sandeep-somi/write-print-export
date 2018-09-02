const config =
{
    'NODE_ENV' 	: process.env.NODE_ENV,
    'dev'      	: process.env.NODE_ENV === 'development',
    'prod'     	: process.env.NODE_ENV === 'production',
    'test'     	: process.env.NODE_ENV === 'test',
    'debug'    	: process.env.DEBUG || false,
    'baseName' 	: process.env.BASENAME || '',
    'api' 		: process.env.API || ''
}


export default config
