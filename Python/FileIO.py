import xml.etree.ElementTree as ET
import csv

file_name = "allstats1_Result_0000_modified.xml"

try:
    tree = ET.parse(file_name)
    root = tree.getroot()

    requested_file = open(file_name, 'w')
except:
    exit_err("Unable to open and parse input definition file: " + file_name)

csvwriter = csv.writer(requested_file)

head = ['valuationSpecName','baseBenchmarkPairName','statisticName','drilldownName','positionId','positionName',
'holdingId', 'holdingName', 'securityType', 'customDimensionName', 'horizon', 'resultValue']

csvwriter.writerow(head)

for result in root.iter('valuationSpecName'):
    row = []
    if result.text == '':
      row.append("NA")
    else:
      row.append(result.text)
    csvwriter.writerow(row)
requested_file.close()