/*
# pulgin installed on http://letteringjs.com/
# 以下は仕様の考察
# 1つ目のlettering('words')で、セレクター(ここではh2)に含まれる単語を<span>で区切る。恐らく'words'という引数はラッパーを作成するためのもの。
# .childrenはラッパーの中の子要素属性を指定するメソッド。その子要素を機能(分割)させるために.lettering()を行う
#
*/


 $(function(){
  $("#txt > h2")
    .css('opacity', 1)
    .lettering( 'words' ) /*この引数は何？*/
    .children( "span" ).lettering()
    .children( "span" ).lettering();
});

