import bodyParser from 'body-parser';
const configBodyParser = (app) => {
app.use(bodyParser.json({
    limit: '10kb',
    strict:true
})); 
app.use(bodyParser.urlencoded({
    extended:true
}))
}

export default configBodyParser; 
