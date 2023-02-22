var color_ = 0;
(
    function () {
        //左上角数字时钟
        var time_output = document.getElementById("time");
        var date = new Date();
        time_output.innerHTML = date.toLocaleString();
        var Interval_1 = setInterval(function () {
            date = new Date();
            time_output.innerHTML = date.toLocaleString();
            if (color_ != 0 && color_ % 6 == 0) {
                color_ = 0
            } else {
                color_ += 1;
            }
        }, 500);
    }
)();
(
    function () {
        //在canvas画布中进行绘制时钟
        var canvas, ctx, width, height, target, r;
        width = window.innerWidth - 5;
        height = window.innerHeight - 5;
        canvas = document.getElementById("canvas_1");
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');
        setInterval(main, 0);
        addListeners();

        function main() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            target = {
                x: canvas.width / 2,
                y: canvas.height / 2,
            };
            drawClockScale(target, r);
            drawTime(target, r);
            //时钟圆盘
            ctx.beginPath();
            ctx.lineWidth = 3;
            if (target.x > target.y) {
                r = target.y;
                ctx.arc(target.x, target.y, target.y, 0, (Math.PI / 180) * 360);
                ctx.stroke();
                //绘制钟表
                ctx.font = "50px sans-serif";
                ctx.fillText('12', target.x - 30, 80);
                ctx.fillText('3', target.x + target.y - 75, target.y + 20);
                ctx.fillText('6', target.x - 15, target.y + target.y - 45);
                ctx.fillText('9', target.x - target.y + 50, target.y + 20);
            } else {
                r = target.x;
                ctx.arc(target.x, target.y, target.x, 0, (Math.PI / 180) * 360);
                ctx.stroke();
                //绘制钟表
                ctx.font = "50px sans-serif";
                ctx.fillText('12', target.x - 30, target.y - target.x + 80);
                ctx.fillText('3', target.x + target.x - 75, target.y + 20);
                ctx.fillText('6', target.x - 15, target.y + target.x - 45);
                ctx.fillText('9', target.x - target.x + 50, target.y + 20);
            }
            ctx.lineWidth = 1;
        }

        function addListeners() {
            window.addEventListener('resize', resize);
        }

        function resize() {
            //重置窗口大小
            width = window.innerWidth - 5;
            height = window.innerHeight - 5;
            canvas.width = width;
            canvas.height = height;
        }

        function drawTime(target, r) {
            //绘制时间指针--时针、分针、秒针
            var time = new Date();
            //时针
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.moveTo(target.x, target.y);
            ctx.lineTo(target.x + r * 0.3 * Math.sin((time.getHours() % 12) * 30 * Math.PI / 180), target.y - r * 0.3 * Math.cos((time.getHours() % 12) * 30 * Math.PI / 180));
            ctx.lineCap = 'round';
            ctx.stroke();
            //分针
            ctx.beginPath();
            ctx.moveTo(target.x, target.y);
            ctx.lineTo(target.x + r * 0.5 * Math.sin((time.getMinutes() % 60) * 6 * Math.PI / 180), target.y - r * 0.5 * Math.cos((time.getMinutes() % 60) * 6 * Math.PI / 180));
            ctx.lineCap = 'round';
            ctx.stroke();
            //秒针
            ctx.beginPath();
            ctx.moveTo(target.x, target.y);
            ctx.lineTo(target.x + r * 0.7 * Math.sin((time.getSeconds() % 60) * 6 * Math.PI / 180), target.y - r * 0.7 * Math.cos((time.getSeconds() % 60) * 6 * Math.PI / 180));
            ctx.lineCap = 'round';
            ctx.stroke();
            ctx.lineWidth = 1;
        }

        function drawClockScale(target, r) {
            //绘制时钟刻度线及色彩旋转效果
            var color = ["rgb(255,0,0)", "rgb(255,165,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,255)", "rgb(0,0,255)", "rgb(139,0,255)"];
            for (var a = 0; a < 60; a += 1) {
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.strokeStyle = color[(color_ + a % color.length) % color.length];
                ctx.moveTo(target.x + r * 0.99 * Math.sin(a * 6 * Math.PI / 180), target.y - r * 0.99 * Math.cos(a * 6 * Math.PI / 180));
                if (a % 5 == 0) {
                    ctx.lineTo(target.x + r * 0.9 * Math.sin(a * 6 * Math.PI / 180), target.y - r * 0.9 * Math.cos(a * 6 * Math.PI / 180));
                } else {
                    ctx.lineTo(target.x + r * 0.95 * Math.sin(a * 6 * Math.PI / 180), target.y - r * 0.95 * Math.cos(a * 6 * Math.PI / 180));
                }
                ctx.stroke();
            }
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'rgb(0,0,0)';
        }
    }
)();
