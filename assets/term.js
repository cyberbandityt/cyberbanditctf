const term = document.querySelector("#term-here"),
	termwrite = "<span class='prompt'>root@cyberbandit</span><span class=colon>:</span><span class='tilde'>~</span><span class='colon'># </span><input type='text' id='inp' placeholder='Type a command!' autofocus autocomplete='off'><br/><div class='out'></div>";									
term.innerHTML = termwrite;
let input = document.querySelector("#inp"),
	output = document.querySelectorAll(".out"),
	keepValue = input.value;
const commands = {
	help: "Available commands:<ul><li>whoami</li><li>ping</li><li>id</li><li>ls</li><li>pwd</li><li>hostname</li><li>uname</li><li>kill</li></ul>",
	whoami: "Aayush Poudel <i>(cyberbandit)</i>",
	ping: "You can only ping admin at poudelaayush90@gmail.com",
	id: "uid=0(root) gid=0(root) groups=0(root)",
	pwd: "/root/",
	hostname: "cyberbandit",
	kill: "Love peace no killing ✌️",
	uname: "Linux",
	ls: "secret.txt",
	sudo: "You require god level privilege to do this even root isn't suffice",
	cd: "You cannot change directory",
	rm: "shoot! you cannot do this"
};

const eventListener = () => {
	input.addEventListener("keyup", e => {
		if (13 === e.keyCode) {
			if (input.setAttribute("readonly", "true"), keepValue = input.value, e.preventDefault(), input.disabled = !0, input.setAttribute("value", keepValue), input.removeAttribute("id"), "clear" == keepValue.toLowerCase()) term.innerHTML = termwrite;
			else {
				let e = executeCommand(keepValue.toLowerCase());
				output[output.length - 1].innerHTML = e, term.innerHTML += "<br />" + termwrite
			}
			input= document.querySelector("#inp"), output = document.querySelectorAll(".out"), input.focus(), eventListener()
		} else 38 === e.keyCode && (input.value = keepValue)
	})
};
eventListener(), document.body.addEventListener("click", () => {
	input.focus()
}, !0);
const executeCommand = e => "exit" == e || "quit" == e ? (window.parent.postMessage("closeTerminal", "*"), "Now, the Terminal will be closed.") : commands.hasOwnProperty(e) ? commands[e] : "bash: command not found";