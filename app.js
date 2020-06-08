var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//se requieren los modulos
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/moviesRouter');
var userRouter = require('./routes/userRouter');
var searchRouter = require('./routes/searchUsersRouter');
var reviewRouter = require('./routes/reviewRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//para usar; se define el nombre de la ruta y se especifica la variable que usamos (creada arriba)
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/user', userRouter);
app.use('/search', searchRouter);
app.use('/review', reviewRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
