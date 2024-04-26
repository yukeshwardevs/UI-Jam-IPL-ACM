const img = document.getElementsByClassName('records')[0];
const ImgDetail = document.getElementsByClassName('recordDetail')[0];
const nxtbtn = document.getElementById('nextbtn');
let position = 0;
nxtbtn.addEventListener('click',()=>
{
    position++;
    console.log(position);
    position = (position % 3);
    console.log(position);
    if(position == 0)
    {
        img.src = './virat.jpg';
        ImgDetail.innerText = "Virat Kohli's stellar performance in a single season saw him notch up the highest individual run total, solidifying his reputation as one of cricket's premier batsmen. His remarkable consistency and mastery of the game's nuances propelled him to this extraordinary feat, leaving an indelible mark on cricketing history.He has scored 973 runs in 16 matches.He scored runs at a jaw-dropping average of 81.08 and also had a strike rate of 152.03."
    }
    else if(position == 1)
    {
        img.src='./gayle.jpg';
        ImgDetail.innerText = "Chris Gayle's knock of 175 runs for Royal Challengers Bangalore (RCB) in the IPL is legendary. It occurred on April 23, 2013, against the Pune Warriors India. Opening the innings, Gayle unleashed a devastating assault on the Pune bowlers, smashing an incredible 17 sixes and 13 fours. He reached his century in a record-breaking 30 balls, the fastest in T20 history. Gayle's innings of 175 not out came off just 66 deliveries, propelling RCB to a colossal total of 263/5, the highest in IPL history. His remarkable display of power-hitting remains etched in cricketing memory, symbolizing the pinnacle of T20 batting prowess. Gayle's innings is revered as one of the most iconic and awe-inspiring moments in IPL history, showcasing his unparalleled ability to dominate and decimate any bowling attack.";
    }
    else
    {
        img.src='./abd&virat.jpg';
        ImgDetail.innerText = "Virat Kohli and AB de Villiers, icons of the IPL, orchestrated their highest partnership on May 14, 2016, playing for Royal Challengers Bangalore against Gujarat Lions. In a display of sheer dominance, Kohli scored 109 runs while de Villiers remained unbeaten on 129. Their combined efforts amassed an astounding 229-run partnership, a record that still stands as the highest in IPL history. Throughout their innings, they showcased impeccable timing, power-hitting, and remarkable cricketing intelligence, dismantling the opposition's bowling attack. Their partnership wasn't just about runs but also reflected their mutual understanding and respect, evident in their seamless coordination at the crease. ";
    }
});