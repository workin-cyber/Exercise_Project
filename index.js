require('dotenv').config({ path: '.env' })

const
    express = require('express'),
    app = express(),
    PORT = process.env.PORT

app.use(express.json())

require('./Router')(app)

app.listen(PORT, () => console.log(`Server is running Baroh Hashem in port ${PORT}`))