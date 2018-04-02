#import necassary packages
import lxml
from lxml import etree

#define xml and csv files
xml_file_name = "allstats1_Result_0000_modified.xml"
csv_file_name = "allstats1_Result_0000_modified.csv"

#open original xml file for reading, close automatically
try:
    with open(xml_file_name, 'r') as xml:
        text = xml.read()
    tree = lxml.etree.fromstring(text)
#throw error message in case of error
except IOError:
    print("Unable to open file: " + xml_file_name)

#define head of csv file
head = ['valuationSpecName','baseBenchmarkPairName',
    'statisticName','drilldownName','positionId','positionName',
    'holdingId', 'holdingName', 'securityType',
    'customDimensionName', 'horizon', 'resultValue']

#join the head element with a comma
head_line = ','.join(head)

#open the csv file for writing, add the head with a line break at the end
try:
    with open(csv_file_name, 'w') as csv:
        csv.write(head_line + '\n')
#throw error message in case of error
except IOError:
    print("Unable to write file: " + csv_file_name)

#create row array with empty strings in it
row = ['', '', '', '', '', '', '', '', '', '', '', '']

#define the content creation function
def content_create ():
    #iterate over the requested elements
    for item in tree.iter('valuationSpecName', 'baseBenchmarkPairName', 'statisticName', 'drilldownName', 'positionId', 'positionName', 'holdingId', 'holdingName', 'securityType', 'customDimensionName', 'horizon', 'resultValue'):
        #pick the the requested tag's text
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

        #go through the row
        for row_item_number in range(0, len(row)):
            #if the column doesn't have value give back NA
            if row[row_item_number] == None or row[row_item_number] == "":
                row[row_item_number] = "NA"
        #join the elements with a comma
        line = ','.join(row)
        
        #open the csv file for appending and add the requested items
        try:
            with open(csv_file_name, 'a') as csv:
                csv.write(line + '\n')
        #throw error message in case of error
        except IOError:
            print("Unable to write file: " + csv_file_name)

content_create()