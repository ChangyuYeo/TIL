# 데이터 프레임 (DataFrame) 정리

## 판다스란?

- `Pandas` 는 Python Data Analysis Library의 약어
- Python을 활용해 데이터 분석을 하기 위해서 사용하는 필수적인 패키지
- 통계 분석을 위해 많이 사용되는 R의 `Dataframe`을 벤치마킹하여 Python에서 사용할 수 있도록 제공해주는 라이브러리
- 판다스 데이터프레임을 활용하면 데이터를 표 형태로 처리할 수 있어서 수집된 데이터의 전처리 등 각종 데이터 핸들링을 쉽고 편하게 할 수 있다.

<br />

판다스는 데이터 저장을 위해 2가지 기본 데이터 구조를 제공하고 있다.

| 데이터 구조   | 차원 | 설명                                                          |
| ------------- | ---- | ------------------------------------------------------------- |
| 시리즈        | 1    | 동일한 유형의 데이터를 저장하는 1차원 배열                    |
| 데이터 프레임 | 2    | 행과 열로 되어있는 2차원 테이블, `각 열은 시리즈`로 되어있다. |

이들 데이터 구조는 모두 넘파이 배열을 이용하여 구현된다. <br />
즉, 속도가 빠르며, 모든 데이터 구조는 값을 변경할 수 있고 시리즈를 제외하고는 크기도 변경할 수 있다. <br />
각 행과 열은 이름이 부여되며, 행의 이름은 `인덱스`, 열의 이름은 `컬럼스`라 부른다.

<br />

## 데이터 프레임 생성방법

딕셔너리 형식의 데이터로 데이터 프레임을 생성한다.

```python
import pandas as pd

datas = {'name': ['민준', '현우', '서연'], 'age': [21, 23, 23]}
df = pd.DataFrame(datas)
print(df)
# ** 컬럼의 내용만 출력하고 싶을 때는?
# print(df.name)
# print(df.age)
```

실행 결과

```
  name  age
0   민준   21
1   현우   23
2   서연   23
```

> 판다스의 데이터형 <br />
> Objects: 문자 또는 문자열형 <br />
> Int64: 정수형 <br />
> Float64: 실수형 <br />

<br />

데이터프레임 생성중 인덱스 정보 전달하기

```python
import pandas as pd

datas = {'name': ['민준', '현우', '서연'], 'age': [21, 23, 23]}
df = pd.DataFrame(datas, index=['A','B','C'])
df.columns
df.index
df.values
```

실행 결과 (순서 대로)

```
Index(['name', 'age'], dtype='object')
```

```
Index(['A', 'B', 'C'], dtype='object')
```

```
array([['민준', 21],
       ['현우', 23],
       ['서연', 23]], dtype=object)
```

<br />

## 새로운 열을 생성

```
df['새로운 열'] = (df['기존 열1'] + df['기존 열2']) / 2
df['새로운 열2'] = ['요소1', '요소2', '요소3']
```

<br />

사용 예시

```python
import pandas as pd

# csv 파일 불러오기
filename = '/content/countries.csv'
countries_df = pd.read_csv(filename, index_col = 0)

# 새로운 열 생성
countries_df['density'] = countries_df['population'] / countries_df['area']
print(countries_df)
```

실행 결과 (density가 새로 생성됨)

```
   country      area     capital  population     density
KR   Korea     98480       Seoul    51780579  525.797918
US     USA   9629091  Washington   331002825   34.375293
JP   Japan    377835       Tokyo   125960000  333.373033
CN   China   9596960     Beijing  1439323688  149.977044
RU  Russia  17100000      Moscow   146748600    8.581789
```

<br />

## 기존 열 삭제

```python
# axis = 1, (중요!) inplace=True 원본데이터 반영!
df = df.drop(['삭제할 열'], axis = 'columns', inplace = True)
```

사용 예시

```python
import pandas as pd

datas = {'name': ['민준', '현우', '서연'], 'age': [21, 23, 23]}
df = pd.DataFrame(datas)
# age 라는 열이 사라진 것을 확인할 수 있다.
df.drop(['age'], axis = 1, inplace = True)
```

<br />

## 필터링 방법

넘파이의 논리 인덱싱과 동일한 문법으로 필터링 한다.

```python
import pandas as pd

# 1. 최고기온이 28도 이상인 모든 데이터를 출력하기
file_name = '/content/drive/MyDrive/data/weather.csv'

data = pd.read_csv(file_name, encoding='CP949')
w = data['최고기온'] >= 28
print(data[w])

# 2. 최고로 더웠던 날의 모든 정보 출력
res = data['최고기온'] == data['최고기온'].max()
print(data[res])

# 3. 특정 날짜의 모든 정보를 출력
weather = pd.read_csv(file_name, index_col = 0, encoding='CP949')
# 결측값 0으로 채우기, inplace는 True
weather.fillna(0, inplace = True)
print(weather[:3])
```

실행 결과 (순서 대로)

```
            날짜   지점  평균기온  최저기온  최고기온
2   2021-09-03  108  24.3  20.6  29.2
3   2021-09-04  108  23.2  18.5  28.6
8   2021-09-09  108  23.5  19.1  29.1
9   2021-09-10  108  23.6  19.5  28.9
10  2021-09-11  108  24.0  19.9  29.4
11  2021-09-12  108  24.2  19.2  29.8
12  2021-09-13  108  24.8  20.8  30.3
13  2021-09-14  108  24.6  20.0  29.5
14  2021-09-15  108  23.6  19.5  28.9
16  2021-09-17  108  23.5  20.5  28.2
17  2021-09-18  108  23.9  18.9  29.8
19  2021-09-20  108  23.7  19.0  28.4
```

```
            날짜   지점  평균기온  최저기온  최고기온
12  2021-09-13  108  24.8  20.8  30.3
```

```
             지점  평균기온  최저기온  최고기온
날짜
2021-09-01  108  21.4  18.5  23.9
2021-09-02  108  23.5  20.7  26.7
2021-09-03  108  24.3  20.6  29.2
```

<br />

## 정렬

```python
import pandas as pd

datas = {'name': ['민준', '현우', '서연'], 'age': [21, 23, 23]}
df = pd.DataFrame(datas, index=['A','B','C'])
df.sort_values(by='name', ascending=True)  # name 으로 오름차순 정렬
df.sort_values(by='age', ascending=False)  # age 로 내림차순 정렬
```

<br />

## 그룹화

데이터를 특정한 값에 기반하여 묶는 기능이다. <br />
`groupby()` 함수에 넘길 인자로는 그룹을 묶을 때에 사용될 열의 레이블 이다.

```
groupby(by = [묶는 기준], as_index = False)
(as_index = False는 생략 가능)
```

사용 예시

```python
import matplotlib.pyplot as pit

# 월별 평균
filename = '/content/weather2.csv'
weather = pd.read_csv(filename, encoding='cp949')
weather['month'] = pd.DatetimeIndex(weather['날짜']).month
means = weather.groupby(by='month').mean()
means['평균기온'].plot(kind='bar')
print(means)
```
