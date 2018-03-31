import lxml
from lxml import etree

xml_file_name = "allstats1_Result_0000_modified.xml"
csv_file_name = "allstats1_Result_0000_modified.csv"

with open(xml_file_name, 'r') as xml:
    text = xml.read()
tree = lxml.etree.fromstring(text)

head = ['valuationSpecName','baseBenchmarkPairName','statisticName','drilldownName','positionId','positionName',
'holdingId', 'holdingName', 'securityType', 'customDimensionName', 'horizon', 'resultValue']

head_line = ','.join(head)
with open(csv_file_name, 'w') as csv:
     csv.write(head_line + '\n')

row = ['', '', '', '', '', '', '', '', '', '', '', '']
for item in tree.iter('valuationSpecName', 'baseBenchmarkPairName', 'statisticName', 'drilldownName', 'positionId', 'positionName', 'holdingId', 'holdingName', 'securityType', 'customDimensionName', 'horizon', 'resultValue'):
    if item.tag == 'valuationSpecName':
       row[0] = item.text
    elif item.tag == 'baseBenchmarkPairName':
       row[1] = item.text
    elif item.tag == 'statisticName':
       row[2] = item.text
    elif item.tag == 'drilldownName':
       row[3] = item.text
    elif item.tag == 'positionId':
       row[4] = item.text
    elif item.tag == 'positionName':
       row[5] = item.text
    elif item.tag == 'holdingId':
       row[6] = item.text
    elif item.tag == 'holdingName':
       row[7] = item.text
    elif item.tag == 'securityType':
       row[8] = item.text
    elif item.tag == 'customDimensionName':
       row[9] = item.text
    elif item.tag == 'horizon':
       row[10] = item.text
    elif item.tag == 'resultValue':
       row[11] = item.text

    for row_item_number in range(0, len(row)):
      if row[row_item_number] == None or row[row_item_number] == "":
        row[row_item_number] = "NA"
    line = ','.join(row)
    with open(csv_file_name, 'a') as csv:
     csv.write(line + '\n')