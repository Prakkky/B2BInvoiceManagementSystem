package h222h;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.*;
import com.google.gson.*;
import com.google.gson.GsonBuilder;



@WebServlet("/H222h")
public class H222h extends HttpServlet {
 private static final long serialVersionUID = 1L;

 

  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // TODO Auto-generated method stub
  Connection myConn = null;
  Statement myStmt = null;
  ResultSet rs = null;
  List<Pojo>demoList = new ArrayList <>();
  String sql="Select * from H2HBABBA.BABBA";
  try {
   Class.forName("com.mysql.jdbc.Driver");
   myConn = DriverManager.getConnection("jdbc:mysql://localhost:3306/H2HBABBA", "root" , "AaAa12@##");
   myStmt = myConn.createStatement();
   rs = myStmt.executeQuery(sql);
   while (rs.next()) {
    Pojo demo=new Pojo();
    demo.setCustomer_id(rs.getString("CUSTOMER ID"));
    demo.setCustomer_name(rs.getString("CUSTOMER NAME"));
    demo.setInvoice_id(rs.getString("INVOICE ID"));
    demo.setDue_date(rs.getString("DUE DATE"));
    demo.setInvoice_amount(rs.getString("INVOICE AMT"));
    demo.setPredicted_date(rs.getString("PREDICTED DATE"));
    demoList.add(demo);
   }
   
   String jsonString=getJSONStringFromObject(demoList);
//   Gson gson=new GsonBuilder().setPrettyPrinting().create();
//   String json = gson.toJson(demoList);
//   System.out.println(json);
   response.setContentType("application/json");
//   response.getWriter().write(json);
   try {
    response.getWriter().write(jsonString);
   }catch(IOException exc) {
    exc.printStackTrace();
    
   }
   rs.close();
   myStmt.close();
   
  }
  catch (Exception exc) {
   exc.printStackTrace();
  }
  
  }
  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
   // TODO Auto-generated method stub
   doGet(request, response);
  }
  
  
  private String getJSONStringFromObject(List<Pojo>  filmList) {
   Gson gson=new GsonBuilder().setPrettyPrinting().create();
   String json = gson.toJson(filmList);
   System.out.println(json);
   return json;
  }
 
 }