---
title: Github Blog 생성하기
author: cotes
date: 2024-02-07 12:30:00 +0900
categories: [Making, Blog]
tags: [blog]
render_with_liquid: false
toc: true
---
> 토이 프로젝트로 게임 개발일지를 작성할 필요성을 느꼈습니다.<br>
개발일지를 작성하고 싶었기에 개인 블로그가 필요했습니다.<br>
>
> 기존에 사용하던 블로그는 velog, Github Pages 등이 있습니다.<br>
velog는 tag(category)를 한 번 생성하면 삭제되지 않아서 더럽게 보였습니다.<br>
Github Pages는 유튜브 영상을 보면서 만들어 보았으나, 테마가 안 예뻐서 글 하나만 작성하고 중단했던 기억이 있습니다.<br>
티스토리 계정을 생성까지 해보았지만, 마음에 들지는 않았습니다.<br>
>
> 따라서, Github Pages로 다시 블로그를 생성해 보았습니다.<br>

<br>

## 개발 환경 설정하기
> Window OS와 Github Desktop을 기준으로 작업을 진행하였습니다.<br>
본 Blog에서는 git과 Github Desktop 설치에 대한 내용은 포함하지 않고 있습니다.<br>
{: .prompt-warning }

제가 사용할 Github Blog는 [jekyll](https://jekyllrb-ko.github.io/)을 기반으로 하고 있습니다.<br>
jekyll에 대해서 간단히 정리하자면, 블로그 개발을 지원해 주는 프레임워크라고 할 수 있습니다.<br><br>

이러한 jekyll은 `Ruby`라는 프로그래밍 언어를 필요로 하기에, 제일 먼저 `Ruby`를 설치해 주었습니다.<br>
공식 사이트인 [Ruby Installer](https://rubyinstaller.org/downloads/)에 들어가서 `Ruby devkit 3.2.3-1(x64)` 파일을 다운로드해 주었습니다.<br>
<details>
<summary>설명</summary>
<div markdown="1">
2024년 2월 7일을 기준으로 Ruby Installer에서 추천하는 Ruby devkit 버전은 3.2.X (x64)였습니다.<br> 또한, 다른 개발자분의 후기를 통해 3.2 이상의 Ruby 사용 시 에러를 최소화할 수 있다는 것을 알 수 있었기에 해당 버전의 Ruby를 설치하게 되었습니다.<br>
</div>
</details>
<br>

![Ruby Installer](/assets/img/2024_02_07/1.png)
<br>
위와 같은 창이 나타났다면 숫자 3을 입력하여 모든 프로그램을 설치해 주었습니다.<br><br>
그다음으로 컴퓨터를 리부팅해 주었습니다.<br>
리부팅이 완료되면 Win 키를 누르고, cmd를 입력하여 관리자 권한으로 실행해 주었습니다.<br>

아래 명령어를 입력하여 ruby가 정상적으로 설치되었는지 확인해 주었습니다.
```bash
ruby -v
```
bundler 모듈은 jekyll을 로컬에서 실행시키기 위해 필요합니다.<br>
따라서, 아래 명령어를 입력해서 필요한 bundler 모듈을 설치해 주었습니다.<br>
```bash
gem install jekyll bundler
```

## 테마 설치하기
Github Pages를 지원하는, 즉 jekyll을 지원하는 테마는 다양합니다.<br>
그중에서 저는 Chirpy 테마를 설치하였습니다.<br>

### 1. fork하기
[Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy)에 들어가서 Repo를 fork해 주었습니다.<br>
추후 유지보수를 위해서 직접 설치가 아닌 fork를 해주었습니다.<br>
![fork하기1](/assets/img/2024_02_07/2.png)

### 2. Repo Name 변경하기

1. {사용자 ID}.github.io<br>
e.g ) kinesis19.github.io<br>
2. 선택사항으로 아래 Description을 수정해줘도 좋습니다.<br>


다 수정하고, 우측 하단에 있는 `Create fork` 버튼을 눌러주었습니다.

![fork하기2](/assets/img/2024_02_07/3.png)

### 3. Clone 하기.

`Code` -> `Open with Github Desktop` 순서로 진행해 주고, Repo의 local 경로를 설정해 주었습니다.<br>
> e.g ) C:\Users\{UserName}\Github\{RepoName}

![Clone하기](/assets/img/2024_02_07/4.png)

### 4. 테마 초기화하기.
Github Blog를 운영하는 데 있어서 불필요한 요소들이 존재합니다.<br>
따라서, Repo 디렉터리에 접근하여 다음과 같은 요소를 삭제해 주었습니다.
- _posts 폴더 내의 하위 파일들.
- docs 폴더


### 5. Local에서 실행하기.
이제 Local에서 실행해보았습니다.<br>
관리자 권한으로 cmd(명령 프롬프트)를 실행해 주었습니다.<br>
그다음으로 현재 clone한 Repo가 위치해 있는 디렉터리로 접근해 주었습니다.<br>
e.g )
```bash
cd C:\Users\{UserName}\Github\{RepoName}
```

해당 Repo에 접근해 준 상태에서 아래 명령어를 입력해 주었습니다.
```bash
bundle
```
Ruby가 잘 설치되어 있고, 위에서 bundler를 정상적으로 설치했다면 아래와 같은 문구가 나타날 것입니다.<br>
```bash
cd C:\Users\{UserName}\Github\{RepoName}>bundle
Bundle complete! 6 Gemfile dependencies, 49 gems now installed.
Use `bundle info [gemname]` to see where a bundled gem is installed.
1 installed gem you directly depend on is looking for funding.
  Run `bundle fund` for details
```

이제 Local에서 Server를 열어볼 차례입니다.
아래 명령어를 입력하여 Local Server를 Hosting해 주었습니다.
```bash
jekyll serve
```
아래와 같이 비슷한 출력물이 나타나면 정상입니다.<br>
(서버를 종료하기 위해서는 Ctrl + C키를 누르고, Y를 입력해주면 됩니다.)

```bash
C:\Users\{UserName}\Github\{RepoName}>jekyll serve
Configuration file: C:\Users\{UserName}\Github\{RepoName}/_config.yml
 Theme Config file: C:\Users\{UserName}\Github\{RepoName}/_config.yml
            Source: C:\Users\{UserName}\Github\{RepoName}
       Destination: C:\Users\{UserName}\Github\{RepoName}/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
                    done in 1.269 seconds.
 Auto-regeneration: enabled for 'C:\Users\{UserName}\Github\{RepoName}'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
      Regenerating: 1 file(s) changed at 2024-02-07 20:39:12
                    _sass/addon/variables.scss
                    ...done in 1.3535956 seconds.
```
Local Server의 주소가 `http://127.0.0.1:4000/`인 것을 확인할 수 있습니다.<br>
Chrome을 실행하여 해당 주소를 입력해 주면 정상적으로 페이지를 확인할 수 있습니다.<br>

## 테마 수정하기
이제부터는 꾸미기 시간입니다.<br>

지금부터는 잘 정리된 아래 링크를 참고하여 수정하면 됩니다.<br>
[하얀눈길 님의 Github Blog 생성하기](https://www.irgroup.org/posts/jekyll-chirpy/#chirpy-%ED%99%98%EA%B2%BD-%EC%84%A4%EC%A0%95) <br>

## 발견한 에러 및 해결 모음
하얀눈길님의 글을 보고 테마 수정과 포스팅, 배포까지 해보았습니다.<br>
진행하면서 발생한 에러가 있기에 어떻게 해결했는지 해당 솔루션을 작성합니다.<br>

### 1. --- layout: home # Index page ---
해당 에러는 알고 나면 쉬운 에러입니다.<br>
해당 에러를 Fix 하기 위해서는 다음과 같은 순서대로 진행해 주었습니다.<br>

1. Repo 내의 settings -> Pages에 접근해 주었습니다.
2. Build and deployment 아래의 Source 버튼을 클릭하여 `Github Actions`로 설정해 주었습니다.
3. 하단에 있는 Configure 버튼을 클릭하였습니다.<br>
![5](/assets/img/2024_02_07/5.png)
4. 마지막으로 우측 상단에 있는 Commit 버튼을 클릭해 주었습니다.
![6](/assets/img/2024_02_07/6.png)

### 2. ERROR '/assets/js/dist/home.min.js' not found.
해당 에러도 알고 나면 쉽게 느껴지는 에러입니다.<br>
우선 .gitignore에서는 dist 폴더와 하위 디렉터리를 ignore 시켜주겠다고 정의되어 있습니다.<br>
해당 에러는 Local에서 발생하는 에러로, 이를 고치기 위해서는 dist 폴더를 생성하고 하위 디렉터리에 js 파일을 추가하면 됩니다.<br>
필요한 js 파일들은 개발자의 demo Repo에서 확인할 수 있었습니다.<br>
[chirpy-demo](https://github.com/cotes2020/chirpy-demo/tree/main/assets/js/dist)

### 3. 라이트 모드 - 다크 모드 변환
해당 에러는 라이트 모드와 다크 모드의 변환이 안 되는 에러입니다.<br>
우측 하단에 아이콘을 클릭하면 사용자의 모드를 변경할 수 있습니다.<br>
Local 장치에서는 라이트-다크 모드가 바뀌는 것이 확인되었지만, 이상하게도 퍼블리싱 된 도메인에서는 모드가 바뀌지 않고 있습니다.<br><br>
저는 .gitignore 파일을 수정하여 해결했습니다.<br>
Local 장치에서는 정상적으로 작동하는데, 도메인에서 작동이 안 된다면 이는 .gitignore의 문제가 있다고 생각했습니다.<br>
따라서, .gitignore의 모든 항목을 주석 처리한 후 commit을 진행하여 deploy 해 주었습니다.<br>
deploy를 하게 되면 아래와 같은 에러가 발생하게 됩니다.<br>
```bash
The process '/opt/hostedtoolcache/Ruby/3.0.6/x64/bin/bundle' failed with exit code 5
```
[비슷한 사례](https://stackoverflow.com/questions/72331753/ruby-and-rails-github-action-exit-code-16)를 발견하게 되었고, 에러를 해결하기 위해 아래 명령어를 입력하였습니다.
```bash
bundle lock --add-platform x86_64-linux
```
다시 돌아와서, 주석 처리된 항목을 모두 주석 해제해 주었습니다.<br>
그 결과 도메인에서도 정상적으로 라이트 모드와 다크 모드가 전환되는 것을 확인할 수 있었습니다. <br>

### 4. '/opt/hostedtoolcache/Ruby/3.0.6/x64/bin/bundle' failed with exit code 5
commit을 하고 Github Actions 탭에 들어가면 에러가 나타났습니다.<br>
수정하고 나니, `Gemfile.lock` 파일이 Cloud Repo에 같이 commit 되어서 발생된 오류였습니다.<br>
`Gemfile.lock` 파일을 Cloud Repo에서 삭제해 주니 정상적으로 deploy가 완료된 것을 확인할 수 있었습니다.<br>
(아래는 에러 코멘트)
```bash
sass-embedded-1.70.0-x86_64-linux requires ruby version >= 3.1.0, which is
incompatible with the current version, 3.0.6
Error: The process '/opt/hostedtoolcache/Ruby/3.0.6/x64/bin/bundle' failed with exit code 5
```
### 5. HTML-Proofer found 14 failures!
hits를 추가하고 commit과 push를 하면, deploy 도중에 아래와 같은 에러를 확인할 수 있습니다.<br>
<details>
<summary>에러 코드</summary>
<div markdown="1">

```bash
Checking 51 internal links
Checking internal link hashes in 4 files
Ran on 17 files!


For the Images check, the following failures were found:

* At _site/404.html:1:

  image https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fkinesis19.github.io&count_bg=%23FF2E63&title_bg=%23252A34&icon=openstreetmap.svg&icon_color=%2308D9D6&title=Visitors&edge_flat=false does not have an alt attribute

* At _site/about/index.html:1:

  image https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fkinesis19.github.io&count_bg=%23FF2E63&title_bg=%23252A34&icon=openstreetmap.svg&icon_color=%2308D9D6&title=Visitors&edge_flat=false does not have an alt attribute

* At _site/archives/index.html:1:

  image https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fkinesis19.github.io&count_bg=%23FF2E63&title_bg=%23252A34&icon=openstreetmap.svg&icon_color=%2308D9D6&title=Visitors&edge_flat=false does not have an alt attribute

* At _site/categories/blog/index.html:1:

  image https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fkinesis19.github.io&count_bg=%23FF2E63&title_bg=%23252A34&icon=openstreetmap.svg&icon_color=%2308D9D6&title=Visitors&edge_flat=false does not have an alt attribute

* At _site/categories/blogging/index.html:1:

  image https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fkinesis19.github.io&count_bg=%23FF2E63&title_bg=%23252A34&icon=openstreetmap.svg&icon_color=%2308D9D6&title=Visitors&edge_flat=false does not have an alt attribute

* At _site/categories/index.html:1:

  image https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fkinesis19.github.io&count_bg=%23FF2E63&title_bg=%23252A34&icon=openstreetmap.svg&icon_color=%2308D9D6&title=Visitors&edge_flat=false does not have an alt attribute

* At _site/categories/making/index.html:1:

  image https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fkinesis19.github.io&count_bg=%23FF2E63&title_bg=%23252A34&icon=openstreetmap.svg&icon_color=%2308D9D6&title=Visitors&edge_flat=false does not have an alt attribute

* At _site/categories/tutorial/index.html:1:

  image https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fkinesis19.github.io&count_bg=%23FF2E63&title_bg=%23252A34&icon=openstreetmap.svg&icon_color=%2308D9D6&title=Visitors&edge_flat=false does not have an alt attribute

* At _site/index.html:1:

  image https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fkinesis19.github.io&count_bg=%23FF2E63&title_bg=%23252A34&icon=openstreetmap.svg&icon_color=%2308D9D6&title=Visitors&edge_flat=false does not have an alt attribute

* At _site/posts/Making_Github_Blog/index.html:1:

  image https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fkinesis19.github.io&count_bg=%23FF2E63&title_bg=%23252A34&icon=openstreetmap.svg&icon_color=%2308D9D6&title=Visitors&edge_flat=false does not have an alt attribute

* At _site/posts/aaa/index.html:1:

  image https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fkinesis19.github.io&count_bg=%23FF2E63&title_bg=%23252A34&icon=openstreetmap.svg&icon_color=%2308D9D6&title=Visitors&edge_flat=false does not have an alt attribute

* At _site/tags/blog/index.html:1:

  image https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fkinesis19.github.io&count_bg=%23FF2E63&title_bg=%23252A34&icon=openstreetmap.svg&icon_color=%2308D9D6&title=Visitors&edge_flat=false does not have an alt attribute

* At _site/tags/getting-started/index.html:1:

  image https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fkinesis19.github.io&count_bg=%23FF2E63&title_bg=%23252A34&icon=openstreetmap.svg&icon_color=%2308D9D6&title=Visitors&edge_flat=false does not have an alt attribute

* At _site/tags/index.html:1:

  image https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fkinesis19.github.io&count_bg=%23FF2E63&title_bg=%23252A34&icon=openstreetmap.svg&icon_color=%2308D9D6&title=Visitors&edge_flat=false does not have an alt attribute


HTML-Proofer found 14 failures!
Error: Process completed with exit code 1.
```
</div>
</details>
<br>
이러한 에러를 해결하기 위해서 구글링을 해보았지만, 나에게 알맞는 사례는 찾을 수 없었습니다.<br>
포기를 하려고 했으나, [뤼튼](https://wrtn.ai/)의 도움을 받아보기로 했습니다.<br>
이미지에 alt 속성이 없으니 alt 속성을 추가해 줘야 한다는 내용을 알게 되었습니다.<br>
아래는 뤼튼이 보내준 코드입니다.<br>
```html
  <!-- View counts -->
  <div class="align-items-center w-100" style="text-align: center; margin-bottom: 1rem;">
    <img
        src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fkinesis19.github.io&count_bg=%23FF2E63&title_bg=%23252A34&icon=openstreetmap.svg&icon_color=%2308D9D6&title=Visitors&edge_flat=false"
        alt="Visitor count" />
  </div>
  ```
코드를 적용하니, deploy에서 발생한 에러를 해결할 수 있었습니다.


## 마무리
오늘은 이렇게 8시간 동안 Github Blog를 개발해 보았습니다.<br>
1번과 2번 에러를 해결하는 데 있어서 상당한 시간을 보낸 것 같습니다.<br>
나만의 Blog를 생성하니 뭔가 뿌듯합니다.<br>
이제 내가 원하는 내용의 글을 작성하여 회고하고, 기록했으면 합니다.<br>
언젠가 다시 겪을 에러를 더 수월하게 해결하기 위함입니다.<br>
