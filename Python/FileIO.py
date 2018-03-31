import xml.etree.ElementTree as ET
import csv

file_name = "allstats1_Result_0000_modified.xml"

tree = ET.parse(file_name)
root = tree.getroot()

try:
    requested_file = open(file_name, "w")
except IOError:
        print("Unable to write file: my-file.txt")

csvwriter = csv.writer(requested_file)

# head = ['valuationSpecName','baseBenchmarkPairName','statisticName','drilldownName','positionId','positionName',
# 'holdingId', 'holdingName', 'securityType', 'customDimensionName', 'horizon', 'resultValue']

# csvwriter.writerow(head)

def parse_data(data):
  for result in root.iter(data):
    # row = []
    valuationSpecName = result.find('valuationSpecName').text
    print valuationSpecName
    # if valuationSpecName == "":
    #   row.append("NA")
    # else:
    #   row.append(result.text)
    # csvwriter.writerow(row)
  requested_file.close()

parse_data('Results')
# parse_data('baseBenchmarkPairName')
# parse_data('statisticName')
# parse_data('drilldownName')
# parse_data('positionId')
# parse_data('positionName')
# parse_data('holdingId')
# parse_data('holdingName')
# parse_data('securityType')
# parse_data('customDimensionName')
# parse_data('horizon')
# parse_data('resultValue')