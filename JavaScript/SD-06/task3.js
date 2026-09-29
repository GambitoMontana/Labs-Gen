// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj;
    this.message = msg;
    
    this.printMail=function printMail() {
      return console.log(`${this.subject}: ${this.message}`);
    }
  }
  
  const newMail = new Mail(process.argv[3] = `pizza`,process.argv[4] = `pineapple`);
  
  // Type your code above this line!
  newMail.printMail();