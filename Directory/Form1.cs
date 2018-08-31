///Miguel Pulido - Systems Architect
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;

namespace Directory
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            // Close this window
            this.Close();

        }

        private void button1_Click(object sender, EventArgs e)
        {
            webBrowser1.Navigate("C:/Directory/restroom.jpg");
        }

        private void button2_Click(object sender, EventArgs e)
        {
            webBrowser1.Navigate("C:/Directory/main.jpg");
        }
    }
}
