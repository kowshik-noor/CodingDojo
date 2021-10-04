package com.noor.displaydate;

import java.util.Date;
import java.text.SimpleDateFormat;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DateController {
	private Date daytime = new Date();
	private SimpleDateFormat dateForm = new SimpleDateFormat("EEEE, 'the' d 'of' MMMM, y");
	private SimpleDateFormat timeForm = new SimpleDateFormat("h:m a");
	
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@RequestMapping("/date")
	public String date(Model model) {
//		Ex: Saturday, the 22 of January, 2028
		String date = dateForm.format(daytime);
		model.addAttribute("date", date);
		return "date.jsp";
	}
	
	@RequestMapping("/time")
	public String time(Model model) {
//		Ex: 11:30 PM
		String time = timeForm.format(daytime);
		model.addAttribute("time", time);
		return "time.jsp";
	}
}
