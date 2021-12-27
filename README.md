<!DOCTYPE html> <!--관용적으로 html문서가 시작된다는 뜻-->
<html> <!--여기부터 문서의 시작이라는뜻</html>은 끝-->
<head> <!--제목의 시작과 끝을 표현-->
    <title>명수-html</title><!--<title>은 웹페이지의 제목을 설정할 때 쓰인다.-->
    <!--<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />-->
    <meta charset="utf-8">  <!--<meta charset>은 내가 코딩한 파일유형과 웹페이지의 파일유형을 같이 설정해달라는 뜻 utf-8로 웹에서도 설정해주세요 라는뜻-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="stylesheet" href="style.css">
    <script src="buttoncolor.js"></script> <!--js파일로 쪼개서 입력함-->
</head>

<body> <!--본문의 시작과 끝을 표현-->

<h1>Sports</h1><!--onclick이라는 이벤트 다음에 나오는 명령어들이 자바언어-->
<input type="button" id="btntop" value="다크모드" onclick="
     nightDayHandler(this);
    ">
<!--this는 나 자신이라는뜻. var target(target은 이름일 뿐이라서 이름 설정은 마음대로 해도 됨, 여기서는 choi) 함수로 만들어서 중복을 피할수있다. target으로 만드는데는 style까지 지정됨 .backgroundColor는 안됨-->

<div id="grid">
    <ol> <!--<ol>은 ordered list의 줄임말로 순차적으로 번호를 메기는 리스트에서 쓰인다.<li>는 순차적으로 나뉜 리스트를 줄바꿈해줌.-->
        <li><a href="web.html">TRIATHLON</a></li>
        <li><a href="1.html">SWIM</a></li>
        <li><a href="2.html">BIKE</a></li>
        <li><a href="3.html">RUN</a></li>
    </ol>
    <div>

        <h2>The last dance: RUN</h2> <!--<h1>은 제목을 표시할때 쓰임. 일반적인 글씨보다 굵고 크다. 크기순대로<h1>부터<h6>까지 있다.-->


        <p>마라톤(문화어: 마라손, 마라쏜, 영어: marathon)은 육상 경기의 한 종목으로, 42.195 km (26마일과 385야드)의 거리를 달리는 도로 경주이다. 마라톤 경기는 일반적으로 포장된
            도로, 즉 아스팔트 도로에서 마라톤을 한다. 현재 마라톤의 강국은 케냐와 에티오피아이며 (대한민국은 금메달 2개 획득), 이 중 에티오피아는 올림픽에서 금메달도 여러 개 딴 실질적 마라톤
            강국이다. 2012년에는 우간다 선수가 케냐 선수를 제치고 금메달을 따기도 하였다.

            마라톤은 비록 그 거리가 1921년까지 표준화되지 않았지만 1896년 최초의 근대 올림픽 종목 중 하나이다. 대형 마라톤은 수만 명의 참가자가 있을 수 있기 때문에, 매년 800개 이상의
            마라톤이 전세계에서 열리고, 대다수의 경쟁자들은 오락적인 운동선수들이다.[1]</p>


        <p style="margin-top: 40px;"><!--<p style>줄바꿈 스타일 세부설정할 때 margin-top은 문단의 위여백 크기를 설정-->The sport has its roots
            in multi-event races held in France during the 1920s, with more specified rules and races forming during the
            late 1970s in Southern California as sports clubs and individuals developed the sport. This history has
            meant that variations of the sport were created and still exist. It also led to other three stage races
            using the name triathlon despite not being continuous or not consisting of swim, bike, and run
            elements.[5]</p>
    </div>
</div>
<input type="button" id="btnbottom" value="다크모드" onclick="
     nightDayHandler(this);
    ">
<!--this는 나 자신이라는뜻. var target(target은 이름일 뿐이라서 이름 설정은 마음대로 해도 됨, 여기서는 choi) 함수로 만들어서 중복을 피할수있다. target으로 만드는데는 style까지 지정됨 .backgroundColor는 안됨-->

</body>
</html>
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Co
