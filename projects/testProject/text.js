// A textbox should take in an array of text, with the format:
// [{text Obj}, {text Obj} ...]

// Where a text Obj defines a single message and has fields like:
// message
// time to display
// font type, color, font-weight, etc
// how long to fade in/fade out

var TextBox = function (config) {
    this.config = config;
    this.box = undefined;
    this.messages = this.config.messages;
    this.spacing = this.config.spacing || 30;
    this.displayedMessages = [];
    this.idx = 0;
    this.height = 0;
    this.defaultMessageDuration = 1000;
    this.defaultFadeInTime = 1000;
    this.defaultFadeOutTime = 1000;
    this.defaultTextBoxStyle = {
        position: "relative",
        margin: "30px",
        color: "white",
        "font-size": "30px",
        "font-family": "PressStart",
    }

    this.defaultMessageStyle = {
        position: "absolute",
    };

    // We make the textbox at the specified position.
    this.createTextBox = () => {
        let div = $("<div>");
        div.css(this.defaultTextBoxStyle);
        div.css(this.config.style);
        $(this.config.parent).append(div);
        return div;
    }

    this.displayMessage = (message) => {
        let div = $("<div>");
        div.css({ display: "none", top: this.height + "px" });
        div.css(this.defaultMessageStyle);
        message.style && div.css(message.style);
        message.text && div.text(message.text);
        this.box.append(div);
        div.fadeIn(message.fadeInSpeed || this.defaultFadeInTime);
        // Increase Height
        this.height += div.height() + this.spacing;
        // console.log(this.height)
        this.displayedMessages.push(div);

        setTimeout(() => {
            this.clearMessage(message, div);
        }, (message.duration || this.defaultMessageDuration) + (message.fadeInSpeed || this.defaultFadeInTime));
    }

    this.clearMessage = (message, div) => {
        div.fadeOut(div.fadeOutSpeed || this.defaultFadeOutTime, () => {
            isFunction(message.callback) ? message.callback() : void (0);
            div.remove();
        });
        this.height -= div.height() + this.spacing;
        // console.log(this.height)
        // Reduce height
        // Bump up all messages beneath this one by the height of the removed message
    }

    this.run = () => {
        for (let i = 0; i < this.messages.length; i++) {
            let message = this.messages[i];
            setTimeout(() => {
                this.displayMessage(message);
            }, message.startTime);
        }
    }

    this.start = () => {
        this.box = this.createTextBox();
        this.run();
    }
}
