var url = location.href;
var params = url.indexOf( "tabIndx" ) > 0?url.substring( url.indexOf( "tabIndx" ) ):"=0";
var slctdIndx =  parseInt( params.substring( params.indexOf( "=" )+1 ) );
var cntnr = document.getElementsByClassName( "container" )[0];
document.links[ slctdIndx ].style.backgroundColor = "beige";

if( slctdIndx == 1 ) {
	cntnr.innerHTML = `
<a href="#linux" style="color:blue;"><span>Linux tutorials</span></a>
<a href="#js" style="color:blue;"><span>Tiny javascript projects</span></a>
<pre id="linux">
Linux Tutorials 

Day One (Introduction to Linux):
================================
   * What is Linux? Who is Linus Torvalds?
   * Linux kernel
   * Linux flavours in the market:
      -- Run lsb_release -a to know your vendor
   * Why Linux is preferred over Windows?
	 * / root system
	 * /dev, /bin, /home ,/var/log, /etc/, /tmp, /proc
	 * df -h, du -s to see your disk usage metrics

Day Two (File commands):
========================
   * 	cat
   * 	cp
   * 	rm
   * 	mv
   * 	wc

Day Three (File Attributes):
============================
   * 	know your user and group details from /etc/passwd
   * 	ls -l, m, a
   * 	chmod with octal permissions (0777)
   * 	chmod with +- (add/delete) arguments
   * 	chown/chgrp
	 *  grep -n, -l, -i, -R

Day Four (Vi editor):
=====================
   * 	vi modes ( command/insert/visual)
   * 	navigation options
   * 	set options
   * 	text substitution
   * 	searching for a pattern ( / and ? )
   * 	undoing last edit

Day Five ( Shell ):
===================
   * 	What is shell?
   * 	Various shells available in the market
   * 	pattern matching - wildcard characters (*,?)
   * 	Interpolation
   * 	Redirection
   * 	Here command

Day Six ( Customizing your shell ):
===================================
  *  Adding aliases
  *  Convenient functions
  *  Environment variables
  *  Templates for languages

Day Seven ( More commands ):
============================
  *  cut -d, -f
  *  find -name, -exec
  *  ps -aux
  *  head
  *  tail
  *  tr
  *  sort
  *  uniq

Day Eight ( Shell programming ):
================================
   * read
   * if
   * case
   * while
   * for
   * tar

Day Nine ( An Introduction to Perl ):
=====================================
  *  foreach
  *  split
  *  join
  *  file operations
  *  map & filter functions

Day Ten (Advanced vi ):
=======================
  *  Mapping keys
  *  Writing vim scripts
  *    to add header lines
  *    to add bullets to lists
  *  search & replace
  *  window creation, navigation
</pre>

<pre id="js">
Tiny Javascript Projects

**  Introduction
**  Tip Calculator 
**  Age Calculator  
**  Weight Converter
**  Temperature Converter 
**  BMI Calculator 
**  Pomodoro Timer 
**  Loan Calculator 
**  Auto text effect animation 
**  Background Image scroll effect 
**  Project - Dark mode toggle 
**  Button ripple effect 
**  Heart trail animation  
**  Mini Calendar 
**  Project - Testimonial Slider 
**  Project - Double landing page	
**  Project - Random Photos 
**  Project - Mouse event
**  Project - Loading Bar  
**  Project - Counter 
**  Project - Q&A Section 
</pre>`
} else {
	cntnr.innerHTML = "We provide website design, development services to our clients. We work mostly on old-gen languages like Java, Perl, and the quintessential javascript. At present, we are not big enough to take-up projects in pumpery-shumpery fancy stuffs like ChatGPT, AI, Machine Learning stuffs. The websites we develop use time-tested frameworks like java server pages, perl CGI etc...<br> <br>In addition, we strongly feel there is a need to build the software community in Salem area which is still at its infant stage and needs to be nutured. With that in mind, we are offering courses for students from areas in and around salem.<br>  <br>You can reach us on <i>srvnrsprm@yahoo.com</i> or <i>8015524407</i> for further enquiries.";
}
