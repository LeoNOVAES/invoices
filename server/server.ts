
import express from "express";
import mongoose from 'mongoose';

// MIDDLEWARE
import HandleMiddleware from './internal/domain/middlewares/handler';

// ROUTES
import CompanyRoutes from './internal/api/company/routes';
import CategoryRoutes from './internal/api/category/routes'
import InvoiceRoutes from './internal/api/invoice/routes'
import UserRoutes from './internal/api/user/routes'
import ExpensesRoutes from './internal/api/expenses/routes'

const app = express();
app.use(express.json());

app.use(CompanyRoutes);
app.use(CategoryRoutes);
app.use(InvoiceRoutes);
app.use(UserRoutes);
app.use(ExpensesRoutes);

app.get('/healthcheck', (req, res) => {
    res.send('everything ok');
});

mongoose.connect(process.env.MONGO_URL || 'mongodb+srv://leandronovaes:53Gst52nybl0qhHy@cluster0.xj0qd.mongodb.net/invoices?retryWrites=true&w=majority');

const PORT = 3333;

app.listen(PORT || process.env.PORT, () => console.log(`App listening on PORT ${PORT}`));


