    var src, name, price;
    var myObj;
    function giveData(psrc, pname, pprice) {
      this.psrc = psrc;
      this.pname = pname;
      this.pprice = pprice;
      myObj = {
        src: psrc,
        name: pname,
        price: pprice
      }
      document.getElementById("label_name").innerHTML="Quantity("+pname+")";
      console.log(myObj);
      console.log(psrc);
      console.log(pname);
      console.log(pprice);
      let form = document.getElementById("orderForm");
      let elements = form.elements;
      for (let i = 0, len = elements.length; i < len; ++i) {
        elements[i].readOnly = false;
      }
    }

    function orderForm(event) {
      if(f.qty.value=="" || f.name.value==""||f.mob.value==""||f.email.value==""||f.location.value==""||f.hno.value=="")
      {}
      else{
        window.location.href="#bill";
      event.preventDefault();
      console.log(myObj);
      // let data = givenData;
      // console.log(data);
      let src = myObj.src;
      let price = myObj.price;
      let name = myObj.name;
      let qty = f.qty.value;
      let tprice = price * qty;
      let customerName = f.name.value;
      console.log(price);
      document.getElementById("Name").innerHTML = "Name : "+customerName;
      document.getElementById("poster1").src = src;
      document.getElementById("Pizza_Name").innerHTML = "Pizza Name : "+name;
      document.getElementById("quantity").innerHTML = "Quantity : "+qty;
      document.getElementById("total_price").innerHTML = "Total : "+tprice;
      document.getElementById("Price_of_Pizza").innerHTML = "Price : "+price;
      document.getElementById("bill").style.visibility = "visible";

      document.getElementById("orderForm").reset();
      document.getElementById("label_name").innerHTML="Quantity";
      let form = document.getElementById("orderForm");
      let elements = form.elements;
      for (let i = 0, len = elements.length; i < len; ++i) {
      elements[i].readOnly = true;
      }
    }
    }
  