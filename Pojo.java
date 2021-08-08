package h222h;

public class Pojo {
	private String  Customer_name;
	private String  Customer_id;
	private String  invoice_id;
	private String  invoice_amount;
	private String  due_date;
	private String  predicted_date;
	
	
	public String getCustomer_name() {
		return Customer_name;
	}
	public void setCustomer_name(String customer_name) {
		Customer_name = customer_name;
	}
	public String getCustomer_id() {
		return Customer_id;
	}
	public void setCustomer_id(String customer_id) {
		Customer_id = customer_id;
	}
	public String getInvoice_id() {
		return invoice_id;
	}
	public void setInvoice_id(String invoice_id) {
		this.invoice_id = invoice_id;
	}
	public String getInvoice_amount() {
		return invoice_amount;
	}
	public void setInvoice_amount(String invoice_amount) {
		this.invoice_amount = invoice_amount;
	}
	public String getDue_date() {
		return due_date;
	}
	public void setDue_date(String due_date) {
		this.due_date = due_date;
	}
	public String getPredicted_date() {
		return predicted_date;
	}
	public void setPredicted_date(String predicted_date) {
		this.predicted_date = predicted_date;
	}
	
}
