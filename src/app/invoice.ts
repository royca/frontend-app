export class Invoice {
    id: number;
    invoiceNumber: string;
    poNumber: string;
    issueDate: string;
    dueDate: string;
    currency: string;
    amount: number;
    status: string;
    payerOrgId: string;
    billerOrgId: string;
}