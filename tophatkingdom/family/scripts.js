"use strict";
const $ = id => {return document.getElementById(id);};

// Color Constants
const RED = "#E32424";
const GRN = "#56B344";
const BLU = "#236BDE";
const PUR = "#A623DE";

var canvas = $("canvas");
/** @type {CanvasRenderingContext2D} */
var ctx = canvas.getContext("2d");

var c = {
    w: canvas.getAttribute("width"),
    h: canvas.getAttribute("height")
};
var generations = [
    "Test Run",
    "Zeeb",
    "Minecraft Speedrunners",
    "Rizz",
    "Big Brother",
    "Commies ☭",
    "Robot Uprising",
    "Lukewarm Ginger Ale",
    "Fun Gummies",
    "Leaked Military Documents"
];
var people = [
    ["K1NGSW1FFER", 75, 0, true],
    ["K1NGSW0NKER", 225, 0, true],
    ["Mother TopTip", 425, 0, false],
    ["French Toast", 600, 0, false],
    ["Waffles", 700, 0, false],

    ["TipTop", 75, 1, true],
    ["Ragnar18", 225, 1, false],
    ["Indigo", 315, 1, false],
    ["Crystal", 395, 1, false],
    ["gabe but also not gabe", 515, 1, false],
    ["Vampxre", 700, 1, true],

    ["LuminousBox", 65, 2, false],
    ["All-Around-Grace", 215, 2, false],
    ["RiverStorm", 340, 2, false],
    ["GrayBurn", 430, 2, false],
    ["WildPants", 520, 2, false],
    ["SCP-999", 615, 2, false],
    ["Reaper Leviathan", 720, 2, false],

    ["MarriageBot", 250, 3, false],
    ["Mrtacobell11", 500, 3, false],
    ["MaleCowMilkerHelpMeuwuowo", 650, 3, false]
]

// Handles Writing a Name From Parameters
function writeName(name, xPos, gen, royal) {
    ctx.font = "bold 16px Arial";
    ctx.textAlign = "center";

    if (royal) name = "🟡 " + name;
    ctx.fillText(name, xPos, 137 + gen * 100, 150);
}

// Title
ctx.font = "48px Ravie";
ctx.textAlign = "center";
ctx.fillText("The Top Hat Kingdom Family Graph", c.w / 2, 50, c.w - 20);

// Generation Labels
ctx.font = "bold 24px Arial";
ctx.lineCap = "round";
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.textAlign = "left";

ctx.beginPath();
ctx.moveTo(785, 75);
ctx.lineTo(800, 75);
ctx.stroke();
ctx.closePath();

for (var generation of generations) {
    // Position the line and text
    var dist = generations.indexOf(generation);
    var start = 75 + dist * 100;
    var end = start + 100;
    // Line
    ctx.moveTo(800, start);
    ctx.lineTo(800, end);
    ctx.lineTo(785, end);
    ctx.stroke();
    // Text
    ctx.fillText("Gen " + generation, 810, start + 62, 185);
}

// Write Down Family Members
for (var p in people) {
    p = people[p];
    writeName(p[0], p[1], p[2], p[3]);
}

// Family Connections
ctx.lineCap = "round";
ctx.lineWidth = 5;

// K1NGSW1FFER === K1NGSW0NKER ==> TipTop
ctx.beginPath()
ctx.moveTo(50, 142);
ctx.lineTo(50, 162);
ctx.lineTo(225, 162);
ctx.lineTo(225, 142);
ctx.strokeStyle = RED;
ctx.stroke();
ctx.closePath();

ctx.beginPath()
ctx.moveTo(75, 162);
ctx.lineTo(75, 212);
ctx.strokeStyle = BLU;
ctx.stroke();
ctx.closePath();

// Mother TopTip ==> Indigo, Crystal, gabe but also not gabe
ctx.beginPath();
ctx.moveTo(425, 142);
ctx.lineTo(425, 192);
ctx.moveTo(315, 212);
ctx.lineTo(315, 192);
ctx.lineTo(515, 192);
ctx.lineTo(515, 212);
ctx.moveTo(395, 192);
ctx.lineTo(395, 212);
ctx.stroke();
ctx.closePath();

// Mother TopTip -> Ragnar18
ctx.beginPath();
ctx.moveTo(400, 142);
ctx.lineTo(400, 177);
ctx.lineTo(260, 177);
ctx.lineTo(260, 212);
ctx.strokeStyle = GRN;
ctx.stroke();
ctx.closePath();

// Mother TopTip === gabe but also not gabe === French Toast === Waffles ==> Vampxre
ctx.beginPath();
ctx.moveTo(460, 142);
ctx.lineTo(460, 167);
ctx.lineTo(700, 167);
ctx.lineTo(700, 142);
ctx.moveTo(600, 167);
ctx.lineTo(600, 142);
ctx.moveTo(550, 167);
ctx.lineTo(550, 212);
ctx.strokeStyle = RED;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(690, 167);
ctx.lineTo(690, 212);
ctx.strokeStyle = BLU;
ctx.stroke();
ctx.closePath();

// TipTop === Vampxre
ctx.beginPath();
ctx.moveTo(745, 212);
ctx.lineTo(745, 110);
ctx.lineTo(350, 110);
ctx.lineTo(350, 162);
ctx.lineTo(245, 162);
ctx.lineTo(245, 212);
ctx.lineTo(150, 212);
ctx.lineTo(150, 230);
ctx.lineTo(125, 230)
ctx.strokeStyle = RED;
ctx.stroke();
ctx.closePath();

// TipTop =/= Indigo
ctx.beginPath();
ctx.moveTo(115, 242);
ctx.lineTo(115, 262);
ctx.lineTo(220, 262);
ctx.moveTo(240, 262);
ctx.lineTo(290, 262);
ctx.lineTo(290, 242);
ctx.strokeStyle = RED;
ctx.stroke();
ctx.closePath();

// Indigo =/= Crystal ==> WildPants
ctx.beginPath();
ctx.moveTo(335, 242);
ctx.lineTo(335, 262);
ctx.lineTo(340, 262);
ctx.moveTo(360, 262);
ctx.lineTo(395, 262);
ctx.lineTo(395, 242);
ctx.strokeStyle = RED;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(375, 262);
ctx.lineTo(375, 272);
ctx.lineTo(520, 272);
ctx.lineTo(520, 312);
ctx.strokeStyle = BLU;
ctx.stroke();
ctx.closePath();

// TipTop =>=> LuminousBox
ctx.beginPath();
ctx.moveTo(85, 242);
ctx.lineTo(85, 312);
ctx.strokeStyle = PUR;
ctx.stroke();
ctx.closePath();

// Indigo ==> All-Around-Grace, RiverStorm, GrayBurn
ctx.beginPath();
ctx.moveTo(305, 242);
ctx.lineTo(305, 292);
ctx.moveTo(215, 312);
ctx.lineTo(215, 292);
ctx.lineTo(430, 292);
ctx.lineTo(430, 312);
ctx.moveTo(340, 292);
ctx.lineTo(340, 312);
ctx.strokeStyle = BLU;
ctx.stroke();
ctx.closePath();

// Indigo === GrayBurn
ctx.beginPath();
ctx.moveTo(320, 242)
ctx.lineTo(320, 282);
ctx.lineTo(445, 282);
ctx.lineTo(445, 312);
ctx.strokeStyle = RED;
ctx.stroke();
ctx.closePath();

// Vampxre ==> SCP-999
ctx.beginPath();
ctx.moveTo(690, 242);
ctx.lineTo(690, 262);
ctx.lineTo(615, 262);
ctx.lineTo(615, 312);
ctx.strokeStyle = BLU;
ctx.stroke();
ctx.closePath();

// Vampxre ==> Reaper Leviathan
ctx.beginPath();
ctx.moveTo(710, 242);
ctx.lineTo(710, 312);
ctx.strokeStyle = BLU;
ctx.stroke();
ctx.closePath();