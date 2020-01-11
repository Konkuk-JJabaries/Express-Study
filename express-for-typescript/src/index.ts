import bodyParser from 'body-parser';
import cors from 'cors';
import * as ejs from 'ejs';
import express, { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import { join } from 'path';
import productBase from './product/productBase';
import main from './router/main';

const app = express();

app.use(bodyParser.json());

// view 경로 설정
app.set('views', join(__dirname, '../views'));

// 화면 engine을 ejs로 설정 -> html rendering engine
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

// router 세팅
app.use('/', main);
app.use('/product', cors(), productBase);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.sendFile(join(__dirname, '../views/error.html'));
});

app.listen(3000, () => {
    console.log('Port 3000 is running');
});
